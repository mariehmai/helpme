<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import LanguageSelector from "@/components/LanguageSelector.vue";
import IntroductionSection from "@/components/IntroductionSection.vue";
</script>

<template>
  <div class="min-h-screen w-full bg-white dark:bg-gray-900">
    <div class="fixed top-4 left-4 z-50">
      <LanguageSelector />
    </div>

    <header class="w-full px-4 lg:px-8 pt-16">
      <nav class="flex justify-center text-sm lg:text-base mb-6">
        <RouterLink to="/" class="nav-link">
          {{ $t("menu.home") }}
        </RouterLink>
        <RouterLink to="/about" class="nav-link">
          {{ $t("menu.about") }}
        </RouterLink>
      </nav>
    </header>

    <main class="w-full px-4 lg:px-8 pb-8">
      <RouterView />
    </main>

    <footer
      class="w-full px-4 lg:px-8 py-12 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-center"
    >
      <IntroductionSection msg="home.needHelp" />
    </footer>
  </div>
</template>

<style>
@import "@/assets/base.css";

.nav-link {
  @apply inline-block px-6 py-3 font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 transition-all duration-200 hover:bg-teal-50 dark:hover:bg-gray-700 hover:text-teal-700 dark:hover:text-teal-400 hover:border-teal-300 dark:hover:border-teal-600;
}

.nav-link:first-child {
  @apply rounded-l-lg;
}

.nav-link:last-child {
  @apply rounded-r-lg border-l-0 dark:border-l-0;
}

.nav-link.router-link-exact-active {
  @apply bg-teal-600 text-white border-teal-600 font-semibold shadow-sm;
}

.nav-link.router-link-exact-active:hover {
  @apply bg-teal-700 border-teal-700;
}
</style>
