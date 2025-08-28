<template>
  <div class="max-w-4xl mx-auto py-8">
    <!-- Hero Section -->
    <div class="text-center mb-16">
      <h1
        class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
      >
        {{ $t("about.title") }}
      </h1>
      <p
        class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
      >
        {{ $t("about.subtitle") }}
      </p>
    </div>

    <!-- Mission Section -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl p-8 mb-12 border border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div class="flex items-start gap-6">
        <div
          class="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl flex-shrink-0"
        >
          🎯
        </div>
        <div>
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {{ $t("about.mission.title") }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            {{ $t("about.mission.description") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="grid md:grid-cols-2 gap-6 mb-16">
      <div
        class="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-200"
      >
        <div class="flex items-center gap-4 mb-6">
          <div
            class="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl"
          >
            🌍
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ $t("about.features.global.title") }}
          </h3>
        </div>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ $t("about.features.global.description") }}
        </p>
      </div>

      <div
        class="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
      >
        <div class="flex items-center gap-4 mb-6">
          <div
            class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl"
          >
            ⚡
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ $t("about.features.instant.title") }}
          </h3>
        </div>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ $t("about.features.instant.description") }}
        </p>
      </div>

      <div
        class="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-200"
      >
        <div class="flex items-center gap-4 mb-6">
          <div
            class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl"
          >
            🌐
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ $t("about.features.multilingual.title") }}
          </h3>
        </div>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ $t("about.features.multilingual.description") }}
        </p>
      </div>

      <div
        class="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600 transition-all duration-200"
      >
        <div class="flex items-center gap-4 mb-6">
          <div
            class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 text-xl"
          >
            📱
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ $t("about.features.mobile.title") }}
          </h3>
        </div>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ $t("about.features.mobile.description") }}
        </p>
      </div>
    </div>

    <!-- How it Works Section -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12 shadow-sm"
    >
      <h2
        class="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-4"
      >
        <div
          class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400"
        >
          🛠️
        </div>
        {{ $t("about.howItWorks.title") }}
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <div
            class="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6"
          >
            1
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
            {{ $t("about.howItWorks.step1.title") }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ $t("about.howItWorks.step1.description") }}
          </p>
        </div>

        <div class="text-center">
          <div
            class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6"
          >
            2
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
            {{ $t("about.howItWorks.step2.title") }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ $t("about.howItWorks.step2.description") }}
          </p>
        </div>

        <div class="text-center">
          <div
            class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6"
          >
            3
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
            {{ $t("about.howItWorks.step3.title") }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ $t("about.howItWorks.step3.description") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Important Notice -->
    <div
      class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 mb-12"
    >
      <div class="flex items-start gap-4">
        <div
          class="w-10 h-10 bg-orange-100 dark:bg-orange-900/40 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-400 text-xl flex-shrink-0"
        >
          ⚠️
        </div>
        <div>
          <h3
            class="font-semibold text-orange-800 dark:text-orange-200 mb-3 text-lg"
          >
            {{ $t("about.disclaimer.title") }}
          </h3>
          <p class="text-orange-700 dark:text-orange-300 leading-relaxed">
            {{ $t("about.disclaimer.description") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Statistics -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      <div
        class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div class="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-3">
          195+
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {{ $t("about.stats.countries") }}
        </div>
      </div>

      <div
        class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">
          3
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {{ $t("about.stats.languages") }}
        </div>
      </div>

      <div
        class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div
          class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-3"
        >
          24/7
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {{ $t("about.stats.availability") }}
        </div>
      </div>

      <div
        class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-3">
          ∞
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {{ $t("about.stats.free") }}
        </div>
      </div>
    </div>
  </div>
</template>
