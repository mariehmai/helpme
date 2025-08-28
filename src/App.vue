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
        <RouterLink to="/emergency-guide" class="nav-link">
          {{ $t("menu.guide") }}
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
