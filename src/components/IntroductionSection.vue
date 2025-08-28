<script setup lang="ts">
defineProps<{
  msg: string;
}>();
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
          class="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
        >
          🚨 {{ $t("home.cta.emergency") }}
        </button>
        <button
          class="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          🩹 {{ $t("home.cta.firstAid") }}
        </button>
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
  </div>
</template>
