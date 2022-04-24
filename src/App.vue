<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import LanguageSelector from "@/components/LanguageSelector.vue";
import IntroductionSection from "@/components/IntroductionSection.vue";
</script>

<template>
  <header class="max-h-[100vh] lg:flex lg:place-items-center pr-[6rem] gap-10">
    <LanguageSelector />
    <img
      alt="Puzzled emoji"
      class="block mt-0 mx-auto mb-8"
      src="@/assets/puzzled.gif"
      width="125"
      height="125"
    />
    <div class="flex place-items-start flex-wrap">
      <IntroductionSection msg="home.needHelp" />
      <nav>
        <RouterLink to="/">{{ $t("menu.home") }}</RouterLink>
        <RouterLink to="/about">{{ $t("menu.about") }}</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
