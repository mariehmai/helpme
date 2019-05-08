<template>
  <div class="home">
    <nav>
      <ul id="menu-list">
        <router-link class="link" v-for="item in menu" v-bind:key="item.id" v-bind:to="item.path">
          <Card class="menu-item" v-bind:title="$t(item.titleIntlId)" v-bind:logo="item.logo"/>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import menu from "@/data/menu";

export default {
  name: "Home",
  props: {
    msg: String
  },
  data() {
    return {
      menu
    };
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

.link {
  margin: 20px 10px;
  text-decoration: none;
  color: #2c3e50;
}

.link:hover {
  background-color: #f6f8fa;
  border-radius: 8px;
}

.menu-item {
  padding: 0 12px;
  width: 120px;
  height: 100%;
}
</style>
