<template>
  <div v-on:click="onClick" class="card">
    <img class="img" v-bind:alt="logo" v-bind:src="require('../assets/menu/' + logo)">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    logo: String,
    onClick: { type: Function, default: () => {} }
  }
};
</script>

<style scoped>
.card {
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 2px 2px 4px #596068;
}

.img {
  max-width: 50px;
  padding-top: 20px;
}
</style>