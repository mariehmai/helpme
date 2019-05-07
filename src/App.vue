<template>
  <div id="app">
    <img alt="HelpMe logo" src="./assets/logo.svg">
    <Landing v-bind:menu="menu" msg="HelpMe"/>
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";

let menu = [
  {
    id: 0,
    title: "Emergency numbers",
    logo: "911.svg"
  },
  {
    id: 1,
    title: "Emergency contacts",
    logo: "phone-book.svg"
  },
  {
    id: 2,
    title: "Danger alert",
    logo: "alert.svg"
  },
  {
    id: 3,
    title: "Police stations",
    logo: "police.svg"
  },
  {
    id: 4,
    title: "Hospitals",
    logo: "hospital.svg"
  }
];

export default {
  name: "app",
  data: function() {
    return {
      menu
    };
  },
  components: {
    Landing
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
