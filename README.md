# Use `input-plate-number`
> 因为是使用的 `touch` 事件，所以目前自定义车牌键盘只支持移动端使用
> 
> PC 端则采用 `input` 输入框的形式用于处理用户输入车牌

## 安装
```
yarn add input-plate-number  / npm install input-plate-number / pnpm install input-plate-number
```


## 使用
> 因为是基于 `Vue2.x` 开发的组件库，所以只支持在 `Vue2.x` 项目中使用

```ecmascript 6
// main.js
import InputPlateNumber from 'input-plate-number'
import 'input-plate-number/lib/input-plate-number.css'

Vue.use(InputPlateNumber)
```
```vue
<!-- template -->
<input-plate-number></input-plate-number>
```


## API
### slot 
| 参数      | 说明              |
|:--------|:----------------|
| default | 组件中 body 中自定义内容 |  
| header  | 组件头部进行自定义内容     |


### props 传入参数
| 参数                 | 说明             | 类型        | 默认值     |
|:-------------------|:---------------|:----------|:--------|
| wrapClass          | 最外层的 className | `String`  | -       |
| defaultPlateNumber | 初始化时展示的车牌      | `String`  | 浙B      |
| keyboardVisible    | 是否显示自定义键盘      | `Boolean` | `true`  |
| energy             | 是否打开新能源开关      | `Boolean` | `false` |
| isNoCar            | 是否打开无牌车适配      | `Boolean` | `false` |


#### Events
| 事件名           | 说明                                              | 回调函数                                       |
|:--------------|:------------------------------------------------|:-------------------------------------------|
| done          | 输入完成后触发 (移动端输入完成后则自动触发， PC 端需要按下回车键触发)          | `{ isPlateNum: Boolean,plateNum: String }` |
| key-click     | 输入时触发 (移动端触摸自定义车牌键盘触发， PC 端输入框输入时自动触发)          | `{ curKey: String, plateNum: String }`     |
| del-click     | 删除时触发 （移动端触摸自定义删除键触发，PC 端按下 `Backspace` 回退键时触发） | `{  plateNum: String }`                    |
| inp-click     | 移动端触摸上方输入框的时候触发                                 | `{  curIdx: Number, plateNum: String }`    |
| change-energy | 开关新能源模块滑块时触发                                    | `boolean`                                  |
| close         | 移动端关闭自定义键盘时触发                                   | `-`                                        |


## 注意事项
* ~~如果要更改默认车牌应在 `created` 生命周期中进行处理，否则需要利用组件 `key` 特性进行重新渲染才会生效~~ (1.4.1之后版本已解决)
* 目前暂不支持 `v-model` 使用
