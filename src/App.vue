<template>
  <v-app id="app-container">
    <div class="logo-container">
      <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
        <flag :iso="entry.flag"/>
        {{entry.title}}
      </button>
    </div>
    <div>
      <img v-on:click="goBack" alt="HelpMe logo" src="@/assets/logo.svg">
      <h1>{{$t("app.name")}}</h1>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  name: "app",
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "co", language: "es", title: "Español" },
        { flag: "fr", language: "fr", title: "Français" }
      ]
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>

<style>
#app-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px 20px;
}

.logo-container {
  margin-bottom: 40px;
}

button {
  padding: 8px;
  border: 1px solid green;
  border-radius: 8px;
  margin: 6px;
}
</style>
