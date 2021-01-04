# 使用方法
> 使用 `touchstart` 事件，只支持移动端, PC端采用输入框方案
 
### 安装
```
yarn add input-plate-number  // npm install input-plate-number --save
```

### 使用
```javascript
// main.js
import InputPlateNumber from 'input-plate-number';
import 'input-plate-number/lib/input-plate-number.css'

Vue.use(InputPlateNumber)
```

#### 页面使用
```vue
  <input-plate-number @done="handleDone">
    // slot 可选  default/header
  </input-plate-number>
```

#### props 传入参数
```vue
  props: {
    wrapClass: String, // 最外部的 class 名字 
    defaultPlateNumber: { // 初始车牌  默认 浙B
      type: String,
      default: "浙B"
    },
    keyboardVisible: { // 是否显示键盘 支持 .sync
      type: Boolean,
      default: true
    },
    energy: { // 是否是新能源 支持 .sync
      type: Boolean,
      default: false
    }
  }
```

#### 回调函数
> @done 输入完成后自动触发 可选
>
> @key-click 触摸输入字母之后触发  可选
>
> @del-click 触摸删除按钮的时候触发 可选
>  
> @close 触摸关闭的时候触发 可选
>
> @inp-click 触摸输入框的时候触发 可选
>
> @pc-car-inp Pc端变为输入框输出 

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
