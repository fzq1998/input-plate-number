/**
 * Created by fzq on 2020/7/22.
 */

/**
 * 数字正则
 * @param value 要验证的字符
 * @returns {boolean}
 */
export const isNumber = value => {
  return /(0|^[1-9]\d*$)/.test(value);
};

/**
 * 验证车牌正则(包括新能源汽车)
 * @param plateNum 车牌
 * @returns {boolean}
 */
export const isPlateNum = plateNum => {
  return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(
    plateNum
  );
};

/**
 * 中文正则(是否包含中文)
 * @param liter 中文
 * @returns {boolean}
 */
export const isLiter = liter => {
  return /[\u4e00-\u9fa5]/.test(liter);
};

/**
 * 判断是否是移动端
 * @return {boolean}
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPod|BlackBerry|RIM|Windows Phone|Nexus|Nokia|iPad/i.test(navigator.userAgent)
}
