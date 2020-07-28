/**
 * Created by fzq on 2020/7/23.
 */
// 导入组件，组件必须声明 name
import InputPlateNumber from "./src/input-plate-number";

/* istanbul ignore next */
// 为组件提供 install 安装方法，供按需引入
InputPlateNumber.install = Vue =>
  Vue.component(InputPlateNumber.name, InputPlateNumber);

// 默认导出组件
export default InputPlateNumber;
