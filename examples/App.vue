<template>
  <div id="app">
    <input-plate-number
      @done="handleDone"
      @key-click="handleKeyClick"
      @inp-click="handleInpClick"
      @del-click="handleDelClick"

      :keyboard-visible.sync="keyboardVisible"
      :is-no-car="true"
      :default-plate-number="defaultPlateNumber"
      :energy.sync="isEnergy"
      :key="defaultPlateNumberKey"
      wrap-class="box"
    ></input-plate-number>

    <button @click="keyboardVisible = false">关闭</button>
    <button @click="keyboardVisible = true">打开</button>
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
      keyboardVisible: true
    };
  },
  methods: {
    handleDone(val) {
      console.log(val);
    },
    handleKeyClick(key) {
      console.log(key, "--- key click");
    },
    handleInpClick (key) {
      console.log(key, '--- inp key click')
    },
    handleDelClick(key) {
      console.log(key, '--- del key click')
    }
  },
  created() {
    // setTimeout(() => {
    //   this.defaultPlateNumber = "浙Z12345";
    //   // this.isEnergy = true;
    //   this.defaultPlateNumberKey++;
    // }, 4000);
  }
};
</script>

<style>
body {
  background: #333;
}
.box {
  padding: 20px;
  background-color: #fff;
}
</style>
