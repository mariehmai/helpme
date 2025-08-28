<script setup lang="ts">
defineProps<{
  msg: string;
}>();

import { useRouter } from "vue-router";

const router = useRouter();

function scrollToSearch() {
  if (router.currentRoute.value.path === "/") {
    const searchInput = document.getElementById("emergency-search");
    if (searchInput) {
      searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => searchInput.focus(), 500);
    }
  } else {
    router.push("/").then(() => {
      setTimeout(() => {
        const searchInput = document.getElementById("emergency-search");
        if (searchInput) {
          searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => searchInput.focus(), 300);
        }
      }, 100);
    });
  }
}
</script>

<template>
  <div class="w-full text-center">
    <div class="w-full mb-12">
      <h1
        class="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight flex items-center justify-center gap-4"
      >
        {{ $t(msg) }}
      </h1>
      <h3
        class="text-lg lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed px-4"
      >
        {{ $t("home.description") }}
      </h3>

      <div
        class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
      >
        <button
          @click="scrollToSearch"
          class="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
        >
          🚨 {{ $t("home.cta.emergency") }}
        </button>
        <RouterLink
          to="/emergency-guide"
          class="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          🩹 {{ $t("home.cta.firstAid") }}
        </RouterLink>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="w-full mb-12">
      <div
        class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto"
      >
        <div class="text-center p-6">
          <div
            class="text-2xl lg:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2"
          >
            195+
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ $t("home.stats.countries") }}
          </div>
        </div>

        <div class="text-center p-6">
          <div
            class="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
          >
            24/7
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ $t("home.stats.available") }}
          </div>
        </div>

        <div class="text-center p-6">
          <div
            class="text-2xl lg:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2"
          >
            3
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ $t("home.stats.languages") }}
          </div>
        </div>

        <div class="text-center p-6">
          <div
            class="text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400 mb-2"
          >
            0€
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ $t("home.stats.cost") }}
          </div>
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <div class="w-full">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center"
        >
          {{ $t("home.services.title") }}
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div class="text-center group cursor-pointer">
            <div
              class="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mx-auto mb-4 group-hover:bg-teal-600 group-hover:text-white transform group-hover:scale-105 transition-all duration-200"
            >
              🚑
            </div>
            <h4
              class="font-medium text-gray-900 dark:text-gray-100 mb-2 text-base"
            >
              {{ $t("service.ambulance") }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t("home.services.ambulance.description") }}
            </p>
          </div>

          <div class="text-center group cursor-pointer">
            <div
              class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transform group-hover:scale-105 transition-all duration-200"
            >
              👮
            </div>
            <h4
              class="font-medium text-gray-900 dark:text-gray-100 mb-2 text-base"
            >
              {{ $t("service.police") }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t("home.services.police.description") }}
            </p>
          </div>

          <div class="text-center group cursor-pointer">
            <div
              class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 text-2xl mx-auto mb-4 group-hover:bg-purple-600 group-hover:text-white transform group-hover:scale-105 transition-all duration-200"
            >
              🚒
            </div>
            <h4
              class="font-medium text-gray-900 dark:text-gray-100 mb-2 text-base"
            >
              {{ $t("service.fire") }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t("home.services.fire.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="mt-12 pt-8 border-t border-gray-300 dark:border-gray-600">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Get in Touch
      </h3>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        {{ $t("about.contact.description") }}
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:mai.mariehelene@gmail.com"
          class="flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
          {{ $t("about.contact.email") }}
        </a>
        <a href="https://github.com/mariehmai" class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
            />
          </svg>
          {{ $t("about.contact.github") }}
        </a>
      </div>
    </div>
  </div>
</template>
