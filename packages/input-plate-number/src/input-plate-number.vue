<template>
  <div class="keyboard" :class="wrapClass">
    <slot name="header"></slot>
    <div class="keyboard-input">
      <template v-if="isMobile">
        <div
            class="keyboard-input__item"
            :class="[ curKeyIdx === idx + 1 && 'keyboard-input__active ignore-height', idx === 7 && 'keyboard-input__energy' ]"
            v-for="(item, idx) in inputs" :key="idx"
            @touchstart="handleInpTouch(idx)">
          {{ item }}
          <i v-show="idx === 7" class="keyboard-input__energy--icon"></i>
        </div>
      </template>
      <template v-else>
        <input type="text" class="keyboard-input__content"
               placeholder="请输入车牌"
               @keyup="handleKeyUp"
               @input="handleInput" v-model="pcCarNumber">
      </template>
    </div>
    <slot></slot>
    <div class="keyboard-content" v-show="innerKeyboardVisible">
      <div class="keyboard-bar">
        <div class="keyboard-bar__close" @touchstart="handleCloseKeyboard">
          <i class="keyboard-bar__close--icon"></i>
          <span class="keyboard-bar__close--label">关闭</span>
        </div>
        <label class="keyboard-bar__switch">
          <span class="keyboard-bar__switch--label">新能源</span>
          <input
            v-model="isEnergy"
            @change="handleEnergyChange"
            type="checkbox"
            class="keyboard-switch keyboard-switch--animation"
          />
        </label>
      </div>
      <div class="keyboard-prefix" v-if="curKeyIdx === 1">
        <div class="keyboard-row">
          <div
            class="keyboard-key"
            @touchstart="handleKeyTouchStart(key, $event)"
            @touchend="handleKeyTouchEnd"
            v-for="key in provinceData1"
            :key="key"
          >
            <span class="keyboard-key__txt">{{ key }}</span>
          </div>
        </div>
        <div class="keyboard-row">
          <div
            class="keyboard-key"
            @touchstart="handleKeyTouchStart(key, $event)"
            @touchend="handleKeyTouchEnd"
            v-for="key in provinceData2"
            :key="key"
          >
            <span class="keyboard-key__txt">{{ key }}</span>
          </div>
        </div>
        <div class="keyboard-row">
          <div class="keyboard-key keyboard-key__empty-small">
            <span class="keyboard-key__txt"></span>
          </div>
          <div
            class="keyboard-key"
            @touchstart="handleKeyTouchStart(key, $event)"
            @touchend="handleKeyTouchEnd"
            v-for="key in provinceData3"
            :key="key"
          >
            <span class="keyboard-key__txt">{{ key }}</span>
          </div>
          <div class="keyboard-key keyboard-key__empty-small">
            <span class="keyboard-key__txt"></span>
          </div>
        </div>
        <div class="keyboard-row">
          <div class="keyboard-key keyboard-key__empty">
            <span class="keyboard-key__txt"></span>
          </div>
          <div
            class="keyboard-key"
            @touchstart="handleKeyTouchStart(key, $event)"
            @touchend="handleKeyTouchEnd"
            v-for="key in provinceData4"
            :key="key"
          >
            <span class="keyboard-key__txt">{{ key }}</span>
          </div>
          <div
            class="keyboard-key keyboard-key__del"
            @touchstart="handleDelTouch"
          >
            <span class="keyboard-key__txt"></span>
          </div>
          <div class="keyboard-key keyboard-key__empty">
            <span class="keyboard-key__txt"></span>
          </div>
        </div>
      </div>
      <div class="keyboard-suffix" v-else>
        <div class="keyboard-row">
          <div
            class="keyboard-key"
            :class="[curKeyIdx === 2 && !isNoCar && 'keyboard-key__disabled']"
            @touchstart="handleKeyTouchStart(key, $event)"
            @touchend="handleKeyTouchEnd"
            v-for="key in keyboardData1"
            :key="key"
          >
            <span class="keyboard-key__txt">{{ key }}</span>
          </div>
        </div>
        <div class="keyboard-row">
          <div
            class="keyboard-key"
            :class="[
                isLiterCom(key) && 'keyboard-key__disabled',
                isToO(key) && 'keyboard-key__disabled'
            ]"
            @touchstart="handleKeyTouchStart(key, $event)"
            @touchend="handleKeyTouchEnd"
            v-for="key in keyboardData2"
            :key="key"
          >
            <span class="keyboard-key__txt">{{ key }}</span>
          </div>
        </div>
        <div class="keyboard-row">
          <div
            class="keyboard-key"
            :class="[isLiterCom(key) && 'keyboard-key__disabled']"
            @touchstart="handleKeyTouchStart(key, $event)"
            @touchend="handleKeyTouchEnd"
            v-for="key in keyboardData3"
            :key="key"
          >
            <span class="keyboard-key__txt">{{ key }}</span>
          </div>
        </div>
        <div class="keyboard-row">
          <div
            class="keyboard-key"
            :class="[isLiterCom(key) && 'keyboard-key__disabled']"
            @touchstart="handleKeyTouchStart(key, $event)"
            @touchend="handleKeyTouchEnd"
            v-for="key in keyboardData4"
            :key="key"
          >
            <span class="keyboard-key__txt">{{ key }}</span>
          </div>
          <div @click="handleDelTouch" class="keyboard-key keyboard-key__del">
            <span class="keyboard-key__txt"></span>
          </div>
        </div>
      </div>
      <div
        class="keyboard-key__hover"
        v-show="keyHover"
        :style="{ top: keyHoverY + 'px', left: keyHoverX + 'px' }"
      >
        {{ keyVal }}
      </div>
    </div>
  </div>
</template>

<script>
import { isLiter, isPlateNum } from "../../utils/reg";
import isMobile from "../../utils/is-mobile";
import { getVertexPosition } from "../../utils";

export default {
  name: "inputPlateNumber",
  props: {
    wrapClass: String,
    defaultPlateNumber: {
      type: String,
      default: "浙B"
    },
    keyboardVisible: {
      type: Boolean,
      default: true
    },
    energy: {
      type: Boolean,
      default: false
    },
    isNoCar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      curKeyIdx: 1, // 默认初始下标1
      provinceData1: ["京", "津", "晋", "冀", "蒙", "辽", "吉", "黑", "沪"],
      provinceData2: ["苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘"],
      provinceData3: ["粤", "桂", "琼", "渝", "川", "贵", "云", "藏"],
      provinceData4: ["陕", "甘", "青", "宁", "新", "使", "无"],
      keyboardData1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      keyboardData2: ["Q", "W", "E", "R", "T", "Y", "U", "O", "P", "港"],
      keyboardData3: ["A", "S", "D", "F", "G", "H", "J", "K", "L", "澳"],
      keyboardData4: ["Z", "X", "C", "V", "B", "N", "M", "学", "领"],
      keyHoverX: 0,
      keyHoverY: 0,
      keyHover: false,
      canKeyClick: true, // 只能点击一次
      keyVal: "",
      isEnergy: false, // 是否新能源
      inputs: Array(7).fill(""),
      innerKeyboardVisible: true,
      isMobile: true, // 移动端
      pcCarNumber: ''
    };
  },
  computed: {
    isLiterCom() {
      return function(liter) {
        if (this.curKeyIdx === 7) {
          return isLiter(liter) && this.isEnergy
        } else {
          return isLiter(liter);
        }
      };
    },
    isToO() {
      return function(liter) {
        return this.curKeyIdx !== 2 && liter.toString().toLocaleLowerCase() === 'o'; // 字母o
      }
    }
  },
  watch: {
    isEnergy(val) {
      if (val) {
        if (this.inputs[this.curKeyIdx - 1]) {
          this.curKeyIdx++;
        }
        this.inputs.length === 7 && this.inputs.push("");
      } else {
        const defaultPlateNumber = "浙B";
        this.inputs = this.inputs.map((item, idx) => {
          item = defaultPlateNumber[idx];
          return item;
        });
        this.curKeyIdx = defaultPlateNumber.length + 1;
        this.inputs.pop();
      }
    },
    keyboardVisible (val) {
      this.$emit('update:keyboardVisible', val)
      this.innerKeyboardVisible = val
    }
  },
  methods: {
    handleInpTouch(idx) {
      this.curKeyIdx = idx + 1;
      this.innerKeyboardVisible = true;
      const plateNum = this.inputs.join("");

      this.$emit("update:keyboardVisible", true);
      this.$emit("inp-click", { plateNum, curIdx: this.curKeyIdx });
    },
    handleEnergyChange() {
      this.$emit("update:energy", this.isEnergy);
    },
    handleKeyTouchStart(key, e) {
      if (!this.canKeyClick) {
        return;
      }
      this.canKeyClick = false;
      try {
        const currentParentClassList = e.target.parentElement.classList
        if (currentParentClassList.contains('keyboard-key__disabled')) {
          return;
        }
      } catch (e) {
        console.log(e)
      }
      this.keyHover = true;
      let { top, left } = getVertexPosition(e.target);
      const offsetX = e.touches[0].pageX - left;
      const midWidth = e.target.scrollWidth / 2;

      this.keyHoverY = top;
      if (offsetX > midWidth) {
        this.keyHoverX = e.touches[0].pageX - (offsetX - midWidth);
      } else {
        this.keyHoverX = e.touches[0].pageX + midWidth - offsetX;
      }

      this.keyVal = key;
      this.$set(this.inputs, this.curKeyIdx - 1, key);
      const plateNum = this.inputs.join("");
      this.$emit("key-click", { curKey: key, plateNum });

      if (
        (!this.isEnergy && this.curKeyIdx === 7) ||
        (this.isEnergy && this.curKeyIdx === 8)
      ) {
        this.$emit(
          "done",
          {
            isPlateNum: isPlateNum(plateNum),
            plateNum
          },
          () => {
            this.handleClose();
          }
        );
        return;
      }
      this.curKeyIdx++;
    },
    handleKeyTouchEnd() {
      this.canKeyClick = true;
      this.keyHover = false;
    },
    handleDelTouch() {
      const idx = this.isEnergy ? 7 : 6
      if (this.inputs[idx]) {
        this.$set(this.inputs, idx, "");
      } else {
        this.curKeyIdx--;
        this.$set(this.inputs, this.curKeyIdx - 1, "");
      }
      this.curKeyIdx <= 1 && (this.curKeyIdx = 1);
      this.$emit("del-click", { plateNum: this.inputs.filter(e => e).join('') });
    },
    handleCloseKeyboard() {
      this.handleClose();
      this.$emit("close", this.innerKeyboardVisible);
    },
    handleClose() {
      this.innerKeyboardVisible = false;
      this.$emit("update:keyboardVisible", false);
    },
    handleInput (e) {
      this.$emit('key-click', { key: e.data, plateNum: this.pcCarNumber })
    },
    handleKeyUp(e) {
      if (e.key.toLowerCase() === 'enter') {
        this.$emit(
            "done",
            {
              isPlateNum: isPlateNum(this.pcCarNumber),
              plateNum: this.pcCarNumber
            }
        );
      } else if (e.key.toLowerCase() === 'backspace') {
        this.$emit("del-click", { plateNum: this.pcCarNumber });
      }
    }
  },
  created() {
    // 是否处于移动端
    this.isMobile = isMobile()
    if (!this.isMobile) {
      this.innerKeyboardVisible = false
      this.pcCarNumber = this.defaultPlateNumber
      return
    }
    this.isEnergy = this.energy;
    this.innerKeyboardVisible = this.keyboardVisible;
    this.curKeyIdx = this.defaultPlateNumber.length + 1;
    if (this.isEnergy && this.inputs.length === 7) { this.inputs.push(""); }
    this.inputs = this.inputs.map((item, idx) => {
      item = this.defaultPlateNumber[idx];
      return item;
    });
  }
};
</script>

<style lang="scss">
.keyboard {
  &-input {
    display: flex;
    justify-content: center;
    margin: 0 auto;

    &__item {
      position: relative;
      flex: 0 0 70px;
      margin-right: 10px;
      height: 90px;
      border: 1px solid #dedede;
      line-height: 88px;
      text-align: center;
      font-size: 36px;
      box-sizing: border-box;
      background-color: #fff;

      &:last-child {
        margin-right: 0;
      }
    }
    &__energy {
      border: 1px solid #37d868;
      &--icon {
        position: absolute;
        left: -2px;
        top: -12px;
        right: 0;
        margin: auto;
        width: 64px;
        height: 28px;
        background: url("https://cabin-cdn.oss-cn-hangzhou.aliyuncs.com/img/energy-icon.png")
          no-repeat center/64px 28px;
        z-index: 10;
      }
    }
    &__active {
      color: #3092ff;
      background-color: #fff;
      background-image: url("https://cabin-cdn.oss-cn-hangzhou.aliyuncs.com/img/inp-active.png");
      background-position: center 74px;
      background-repeat: no-repeat;
    }
    .ignore-height {
      background-size: 20px 2px;
    }

    &__content {
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 50px;
      line-height: 50px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
      &:focus {
        outline: none;
        border-color: #409eff;
      }
    }
  }

  &-content {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #e1e3e7;
    z-index: 100;
    user-select: none;
    text-align: center;
    box-shadow: 0 -1px 2px #e9e9e9;
  }
  &-bar {
    font-size: 0;
    color: #808388;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;

    &__close {
      $iconWidth: 28px;
      $iconHeight: 4px;

      height: 90px;
      line-height: 90px;
      display: flex;
      align-items: center;

      &--icon {
        display: inline-block;
        vertical-align: middle;
        width: $iconWidth;
        height: $iconHeight;
        background: #3092ff;
        transform: rotate(45deg);
        position: relative;
        margin-right: 10px;

        &::after {
          content: "";
          width: $iconWidth;
          height: $iconHeight;
          background: #3092ff;
          transform: rotate(90deg);
          position: absolute;
          left: 0;
        }
      }
      &--label {
        height: 90px;
        line-height: 90px;
        font-size: 24px;
        display: inline-block;
        vertical-align: middle;
      }
    }

    &__switch {
      height: 90px;
      display: flex;
      align-items: center;

      &--label {
        height: 90px;
        line-height: 90px;
        font-size: 24px;
        margin-right: 10px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  &-row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  &-prefix,
  &-suffix {
    padding: 26px 8px 16px;
    margin: 0 auto;
    text-align: center;
  }
  &-key {
    flex: 1;
    margin-right: 10px;
    font-size: 0;
    border-radius: 12px;

    &__txt {
      display: inline-block;
      user-select: none;
      width: 100%;
      line-height: 90px;
      font-size: 36px;
      color: #0b0b0b;
      box-shadow: 0 2px 2px #d7d7d7;
      background-color: #fff;
      border-radius: 12px;
      z-index: 50;
      font-family: "PingFangSC-Regular",serif;
    }
    &__empty {
      &-small {
        flex: 0.45;
      }
    }
    &__del {
      .keyboard-key__txt {
        height: 90px;
        background: #fff
          url("https://cabin-cdn.oss-cn-hangzhou.aliyuncs.com/img/del-icon.png")
          no-repeat 50%;
        background-size: 45px;
      }
    }
    &__disabled {
      .keyboard-key__txt {
        color: #dadada;
        background: #fff;
      }
    }
    &__hover {
      position: fixed;
      width: 70px;
      height: 90px;
      line-height: 90px;
      transform: translate(-50%, -100%);
      text-align: center;
      font-size: 40px;
      color: #3092ff;
      box-shadow: 0 -2px 4px #e9e9e9;
      z-index: 50;
      background: transparent
        url("https://cabin-cdn.oss-cn-hangzhou.aliyuncs.com/img/key-tip.png")
        no-repeat 50% / auto 100%;
    }

    &:last-child {
      margin-right: 0;
    }
  }
  &-switch {
    $switchWidth: 70px;
    $switchCheckWidth: 32px;
    vertical-align: middle;
    width: $switchWidth;
    height: 34px;
    position: relative;
    border: 1px solid #dfdfdf;
    background-color: #fdfdfd;
    box-shadow: #dfdfdf 0 0 0 0 inset;
    border-radius: 20px;
    background-clip: content-box;
    display: inline-block;
    -webkit-appearance: none;
    user-select: none;
    outline: none;

    &::before {
      content: "";
      width: $switchCheckWidth;
      height: $switchCheckWidth;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.3);
    }
    &:checked {
      border-color: #64bd63;
      box-shadow: #64bd63 0 0 0 10px inset;
      background-color: #64bd63;
    }
    &:checked::before {
      content: "";
      left: $switchWidth - $switchCheckWidth;
    }

    &--animation {
      transition: background-color ease 0.4s;
      &::before {
        transition: left 0.3s;
      }
      &:checked {
        box-shadow: #dfdfdf 0 0 0 0 inset;
        background-color: #64bd63;
        transition: border-color 0.4s, background-color ease 0.4s;
      }
      &:checked::before {
        content: "";
        transition: left 0.3s;
      }
    }

    &--animation_cu {
      transition: border cubic-bezier(0, 0, 0, 1) 0.4s,
        box-shadow cubic-bezier(0, 0, 0, 1) 0.4s;
      &::before {
        transition: left 0.3s;
      }
      &:checked {
        box-shadow: #64bd63 0 0 0 16px inset;
        background-color: #64bd63;
        transition: border ease 0.4s, box-shadow ease 0.4s,
          background-color ease 1.2s;
      }
      &:checked::before {
        content: "";
        transition: left 0.3s;
      }
    }
  }
}
</style>
