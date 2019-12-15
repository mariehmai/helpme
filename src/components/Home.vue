<template>
  <div id="home">
    <nav>
      <ul id="menu-list">
        <div class="link-container" v-for="item in menu" :key="item.id">
          <router-link class="link" v-if="item.path" :to="item.path">
            <Card
              class="menu-item"
              :title="$t(item.titleIntlId)"
              :logo="require(`@/assets/menu/${item.logo}`)"
            />
          </router-link>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import menu from "@/data/menu";

export default {
  name: "Home",
  data() {
    return {
      menu,
      audio: null
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

.link-container {
  margin: 20px 10px;
  color: var(--v-primary-base);
}

.link {
  text-decoration: none;
}

.menu-item {
  width: 120px;
  height: 100%;
}
</style>
