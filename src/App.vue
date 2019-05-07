<template>
  <div id="app">
    <img v-on:click="goBack" alt="HelpMe logo" src="./assets/logo.svg">
    <h1>HelpMe</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
