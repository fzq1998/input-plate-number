/**
 * Created by fzq on 2020/7/22.
 */
/**
 * 获取元素距离页面顶部以及右边的距离
 * @param el
 * @returns {{top: number, left: number}}
 */
export const getVertexPosition = el => {
  let currentTarget = el;
  let top = 0;
  let left = 0;
  while (currentTarget !== null) {
    top += currentTarget.offsetTop;
    left += currentTarget.offsetLeft;
    currentTarget = currentTarget.offsetParent;
  }
  return { top, left };
};
