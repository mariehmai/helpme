<template>
  <div class="home">
    <nav>
      <ul id="menu-list">
        <router-link class="link" v-for="item in menu" v-bind:key="item.id" v-bind:to="item.path">
          <Card class="menu-item" v-bind:title="item.title" v-bind:logo="item.logo"/>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import Card from "./Card.vue";

const menu = [
  {
    id: 0,
    title: "Emergency numbers",
    logo: "911.svg",
    path: "/emergency-numbers"
  },
  {
    id: 1,
    title: "Emergency contacts",
    logo: "phone-book.svg",
    path: "/emergency-contacts"
  },
  {
    id: 2,
    title: "Danger alert",
    logo: "alert.svg",
    path: "/alert"
  },
  {
    id: 3,
    title: "Police stations",
    logo: "police.svg",
    path: "/police"
  },
  {
    id: 4,
    title: "Hospitals",
    logo: "hospital.svg",
    path: "/hospitals"
  }
];

export default {
  name: "Home",
  props: {
    msg: String
  },
  data: function() {
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
