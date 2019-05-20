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
          <Card
            class="menu-item"
            v-else
            :onClick="showAlertDialog"
            :title="$t(item.titleIntlId)"
            :logo="require(`@/assets/menu/${item.logo}`)"
          />
        </div>
      </ul>

      <v-dialog v-model="displayAlert" width="500">
        <v-card>
          <v-card-title class="dialog-title">
            <h2>{{$t('alert.title')}}</h2>
          </v-card-title>
          <AlertOptions :audio="audio"/>
        </v-card>
      </v-dialog>
    </nav>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import AlertOptions from "@/components/AlertOptions.vue";
import menu from "@/data/menu";

export default {
  name: "Home",
  data() {
    return {
      menu,
      displayAlert: false,
      audio: null
    };
  },
  mounted() {
    this.audio = new Audio();
    this.audio.loop = true;
  },
  updated() {
    if (this.displayAlert === false) {
      this.audio.pause();
    }
  },
  components: {
    Card,
    AlertOptions
  },
  methods: {
    showAlertDialog() {
      this.displayAlert = true;
    }
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

.dialog-title {
  color: var(--v-primary-base);
  background-color: var(--v-secondary-base);
}
</style>
