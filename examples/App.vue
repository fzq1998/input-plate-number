<template>
  <div id="app">
    <input-plate-number
      @done="handleDone"
      @key-click="handleKeyClick"
      @inp-click="handleInpClick"
      @del-click="handleDelClick"
      :keyboard-visible="keyboardVisible"
      :is-no-car="true"
      :default-plate-number="defaultPlateNumber"
      v-model="plateNum"
      :energy.sync="isEnergy"
      :key="defaultPlateNumberKey"
      wrap-class="box"
    ></input-plate-number>

    plateNum: {{ plateNum }} <br />
    <button @click="keyboardVisible = false">关闭自定义键盘</button>
    <button @click="keyboardVisible = true">打开自定义键盘</button>
    <button
      @click="
        defaultPlateNumber = '浙E';
        defaultPlateNumberKey++;
      "
    >
      更改默认键盘
    </button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isEnergy: false,
      defaultPlateNumber: "浙B",
      defaultPlateNumberKey: 1,
      keyboardVisible: true,
      plateNum: ""
    };
  },
  methods: {
    handleDone(val) {
      this.plateNum = val.plateNum;
      console.log(val, "--- done");
    },
    handleKeyClick(key) {
      this.plateNum = key.plateNum;
      console.log(key, "--- key click");
    },
    handleInpClick(key) {
      this.plateNum = key.plateNum;
      console.log(key, "--- inp key click");
    },
    handleDelClick(key) {
      this.plateNum = key.plateNum;
      console.log(key, "--- del key click");
    },
    updateDefaultPlateNumber() {
      this.defaultPlateNumber = "浙Z100864";
    }
  },
  created() {
    // this.defaultPlateNumber = "沪A";
    setTimeout(() => {
      this.updateDefaultPlateNumber();
      // this.isEnergy = true;
      // this.defaultPlateNumberKey++;
    }, 1500);
  }
};
</script>

<style>
body {
  margin: 0;
}
.box {
  padding: 20px;
  background-color: #fff;
}
</style>
