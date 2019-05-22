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
  background-image: linear-gradient(
    -225deg,
    var(--v-background-base) 0%,
    var(--v-background-darken1) 100%
  );
}

.v-chip__content {
  background-image: linear-gradient(
    -225deg,
    var(--v-contrast-base) 0%,
    var(--v-contrast-darken1) 100%
  );
}

.v-card,
.v-datatable__actions,
.v-table {
  border-radius: 8px;
}

.main-title {
  font-size: 32px;
  padding: 20px 0;
}

#app-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--v-primary-base);
  background: transparent;
  padding: 0 20px;
  max-width: 850px;
  margin: auto;
}

.logo-container {
  padding-top: 90px;
}
</style>
