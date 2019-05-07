<template>
  <div class="landing">
    <h1>{{ msg }}</h1>
    <ul id="menu-list">
      <li v-for="item in menu" v-bind:key="item.id">
        <Card class="menu-item" v-bind:title="item.title" v-bind:logo="item.logo"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Landing",
  props: {
    msg: String,
    menu: Array
  },
  components: {
    Card
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-inline-start: 0;
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  margin: 20px 10px;
}

.menu-item {
  padding: 12px 12px 0 12px;
  width: 120px;
  height: 100%;
}
</style>
