<template>
  <div id="app">
    <input-plate-number
      @done="handleDone"
      @key-click="handleKeyClick"
      :default-plate-number="defaultPlateNumber"
      :energy.sync="isEnergy"
      :key="defaultPlateNumberKey"
    ></input-plate-number>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isEnergy: false,
      defaultPlateNumber: "",
      defaultPlateNumberKey: 1
    };
  },
  methods: {
    handleDone(val) {
      console.log(val);
    },
    handleKeyClick(key) {
      console.log(key, "outer key");
    }
  },
  created() {
    setTimeout(() => {
      this.defaultPlateNumber = "浙ZD65324";
      this.isEnergy = true;
      this.defaultPlateNumberKey++;
    }, 2000);
  }
};
</script>

<style>
body {
  background: #333;
}
</style>
