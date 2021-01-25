# 使用方法
> 使用 `touchstart` 事件，自定义键盘只支持移动端
> PC 端采用 input 输入框，输入时会触发 `key-click` ，按下回车会触发 `done`
 
## 安装
```
yarn add input-plate-number  // npm install --save input-plate-number 
```

## 在 Vue 项目中使用
```ecmascript 6
// main.js
import InputPlateNumber from 'input-plate-number';
import 'input-plate-number/lib/input-plate-number.css'

Vue.use(InputPlateNumber)
```
模板中
```vue
  <input-plate-number @done="handleDone">
    // slot 可选  default/header
  </input-plate-number>
```
```vue
  methods: {
    /**
     * 车牌输入完成自动触发
     * @param isPlateNum 是否符合车牌规则
     * @param plateNum 返回的车牌
     * @param cb  回调函数 输入完成后关闭键盘- 可选
     */
    handleDone ({ isPlateNum, plateNum }, cb) {
      console.log(isPlateNum)
      console.log(plateNum)
      cb && cb()
    },
    /**
     * 按下的字符的时候触发 可选
     * @param key 实时按下的文字
     * @param plateNum 实时按下的车牌
     */
    handleKeyClick ({ key, plateNum }) {
      console.log(key, plateNum)
    }
  }
```


## API

### slot 
|          参数        |              说明               | 
| :------------------ | :---------------------------- |
|      default        |      可在组件中body填充          |   
|      header         |    可在组件中输入框中进行填充      |

### props 传入参数
|          参数         |              说明               |   类型      | 默认值   |
| :------------------ | :---------------------------- | :-------  | :----- |
|      wrap-class      |       最外部的class名字          | `String`   |    -    |
| default-plate-number |        初始化时展示的车牌        | `String`   |   浙B    |
|   keyboard-visible   | 是否显示自定义键盘  支持 .sync   | `Boolean`  | `true`   |
|        energy        | 是否打开新能源开关  支持 .sync  | `Boolean`  | `false`  |

#### Events
|  事件名   |                             说明                             |                  回调函数                  |
| :------- | :------------------------ | :---------------------------------------- |
|   done    | 输入完成后触发 (移动端输入完成后则自动触发， PC 端需要按下回车键触发) | `{ isPlateNum: Boolean,plateNum: String }` |
| key-click | 输入时触发 (移动端触摸自定义车牌键盘触发， PC 端输入框输入时自动触发) |    `{ key: string, plateNum: string }`     |
| del-click | 删除时触发 （移动端触摸自定义删除键触发，PC 端按下 `Backspace` 回退键触发） |                    `-`                     |
| inp-click |                移动端触摸上方输入框的时候触发                |           `{ plateNum: string }`           |
|   close   |                  移动端关闭自定义键盘时触发                  |                    `-`                     |

