<template>
  <v-app id="app-container">
    <LanguageSelect/>
    <div class="logo-container">
      <img @click="goBack" alt="HelpMe logo" src="@/assets/logo.svg">
      <h1>{{$t("app.name")}}</h1>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
import LanguageSelect from "@/components/LanguageSelect";

export default {
  name: "app",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  components: {
    LanguageSelect
  }
};
</script>

<style>
body {
  background-color: var(--v-background-base);
}

button {
  padding: 8px;
  border: 1px solid var(--v-secondary-base);
  border-radius: 8px;
  margin: 6px;
}

#app-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--v-primary-base);
  padding: 0 20px;
  max-width: 850px;
  margin: auto;
}

.logo-container {
  padding-top: 90px;
}
</style>
