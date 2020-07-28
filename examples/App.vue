<template>
  <div id="app">
    <input-plate-number
      @done="handleDone"
      @key-click="handleKeyClick"
      :energy.sync="isEnergy"
    ></input-plate-number>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      isEnergy: true
    }
  },
  methods: {
    handleDone(val) {
      console.log(val);
    },
    handleKeyClick(key) {
      console.log(key);
    }
  }
};
</script>
