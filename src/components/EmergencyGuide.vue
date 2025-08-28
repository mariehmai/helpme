<template>
  <!-- Header -->
  <div class="text-center mb-12">
    <h1
      class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
    >
      {{ $t("emergencyGuide.title") }}
    </h1>
    <p class="text-lg text-gray-600 dark:text-gray-400">
      {{ $t("emergencyGuide.subtitle") }}
    </p>
  </div>

  <!-- Which Service Section -->
  <div class="mb-16">
    <h2
      class="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
    >
      <div
        class="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-400"
      >
        🚨
      </div>
      {{ $t("emergencyGuide.whichService.title") }}
    </h2>

    <div class="grid md:grid-cols-3 gap-6">
      <!-- Ambulance -->
      <div
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-teal-300 dark:hover:border-teal-600 transition-colors"
      >
        <div
          class="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl mb-4"
        >
          🚑
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t("emergencyGuide.whichService.ambulance.title") }}
        </h3>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <span class="text-teal-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.ambulance.item1") }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-teal-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.ambulance.item2") }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-teal-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.ambulance.item3") }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-teal-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.ambulance.item4") }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-teal-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.ambulance.item5") }}</span>
          </li>
        </ul>
      </div>

      <!-- Police -->
      <div
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
      >
        <div
          class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl mb-4"
        >
          👮
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t("emergencyGuide.whichService.police.title") }}
        </h3>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.police.item1") }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.police.item2") }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.police.item3") }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.police.item4") }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.police.item5") }}</span>
          </li>
        </ul>
      </div>

      <!-- Fire -->
      <div
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
      >
        <div
          class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl mb-4"
        >
          🚒
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t("emergencyGuide.whichService.fire.title") }}
        </h3>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <span class="text-purple-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.fire.item1") }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-purple-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.fire.item2") }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-purple-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.fire.item3") }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-purple-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.fire.item4") }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-purple-500 mt-1">•</span>
            <span>{{ $t("emergencyGuide.whichService.fire.item5") }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Information Checklist Section -->
  <div class="mb-12">
    <h2
      class="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
    >
      <div
        class="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400"
      >
        📋
      </div>
      {{ $t("emergencyGuide.information.title") }}
    </h2>

    <div
      class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8"
    >
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Location Information -->
        <div>
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
          >
            <span
              class="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center text-red-600 dark:text-red-400 text-sm"
              >1</span
            >
            {{ $t("emergencyGuide.information.location.title") }}
          </h3>
          <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"
              ></div>
              <span>{{ $t("emergencyGuide.information.location.item1") }}</span>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"
              ></div>
              <span>{{ $t("emergencyGuide.information.location.item2") }}</span>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"
              ></div>
              <span>{{ $t("emergencyGuide.information.location.item3") }}</span>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"
              ></div>
              <span>{{ $t("emergencyGuide.information.location.item4") }}</span>
            </li>
          </ul>
        </div>

        <!-- Emergency Details -->
        <div>
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
          >
            <span
              class="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded flex items-center justify-center text-orange-600 dark:text-orange-400 text-sm"
              >2</span
            >
            {{ $t("emergencyGuide.information.details.title") }}
          </h3>
          <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"
              ></div>
              <span>{{ $t("emergencyGuide.information.details.item1") }}</span>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"
              ></div>
              <span>{{ $t("emergencyGuide.information.details.item2") }}</span>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"
              ></div>
              <span>{{ $t("emergencyGuide.information.details.item3") }}</span>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"
              ></div>
              <span>{{ $t("emergencyGuide.information.details.item4") }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Important Tips -->
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h3
          class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
        >
          <span
            class="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded flex items-center justify-center text-green-600 dark:text-green-400 text-sm"
            >✓</span
          >
          {{ $t("emergencyGuide.information.tips.title") }}
        </h3>
        <div
          class="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400"
        >
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"
            ></div>
            <span>{{ $t("emergencyGuide.information.tips.item1") }}</span>
          </div>
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"
            ></div>
            <span>{{ $t("emergencyGuide.information.tips.item2") }}</span>
          </div>
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"
            ></div>
            <span>{{ $t("emergencyGuide.information.tips.item3") }}</span>
          </div>
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"
            ></div>
            <span>{{ $t("emergencyGuide.information.tips.item4") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Quick Decision Tree -->
  <div class="mb-12">
    <h2
      class="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
    >
      <div
        class="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400"
      >
        🤔
      </div>
      {{ $t("emergencyGuide.decision.title") }}
    </h2>

    <div
      class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
    >
      <div class="text-center mb-6">
        <div class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {{ $t("emergencyGuide.decision.question") }}
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- YES branch -->
        <div class="text-center">
          <div
            class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4"
          >
            {{ $t("emergencyGuide.decision.yes.answer") }}
          </div>
          <div
            class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6"
          >
            <h4 class="font-semibold text-red-800 dark:text-red-200 mb-3">
              {{ $t("emergencyGuide.decision.yes.title") }}
            </h4>
            <p class="text-sm text-red-700 dark:text-red-300 mb-4">
              {{ $t("emergencyGuide.decision.yes.subtitle") }}
            </p>
            <div class="space-y-2 text-xs text-red-600 dark:text-red-400">
              <div>🚑 {{ $t("service.ambulance") }}</div>
              <div>🚒 {{ $t("service.fire") }}</div>
              <div>👮 {{ $t("service.police") }}</div>
            </div>
          </div>
        </div>

        <!-- NO branch -->
        <div class="text-center">
          <div
            class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4"
          >
            {{ $t("emergencyGuide.decision.no.answer") }}
          </div>
          <div
            class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6"
          >
            <h4 class="font-semibold text-green-800 dark:text-green-200 mb-3">
              {{ $t("emergencyGuide.decision.no.title") }}
            </h4>
            <p class="text-sm text-green-700 dark:text-green-300 mb-4">
              {{ $t("emergencyGuide.decision.no.subtitle") }}
            </p>
            <div class="space-y-2 text-xs text-green-600 dark:text-green-400">
              <div>
                🏥 {{ $t("emergencyGuide.decision.no.options.clinic") }}
              </div>
              <div>
                📞 {{ $t("emergencyGuide.decision.no.options.nonEmergency") }}
              </div>
              <div>
                🩺 {{ $t("emergencyGuide.decision.no.options.doctor") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Call Process -->
  <div>
    <h2
      class="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
    >
      <div
        class="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-400"
      >
        📞
      </div>
      {{ $t("emergencyGuide.process.title") }}
    </h2>

    <div class="grid md:grid-cols-4 gap-4">
      <div
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center"
      >
        <div
          class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4"
        >
          1
        </div>
        <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
          {{ $t("emergencyGuide.process.step1.title") }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ $t("emergencyGuide.process.step1.description") }}
        </p>
      </div>

      <div
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center"
      >
        <div
          class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4"
        >
          2
        </div>
        <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
          {{ $t("emergencyGuide.process.step2.title") }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ $t("emergencyGuide.process.step2.description") }}
        </p>
      </div>

      <div
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center"
      >
        <div
          class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4"
        >
          3
        </div>
        <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
          {{ $t("emergencyGuide.process.step3.title") }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ $t("emergencyGuide.process.step3.description") }}
        </p>
      </div>

      <div
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center"
      >
        <div
          class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4"
        >
          4
        </div>
        <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
          {{ $t("emergencyGuide.process.step4.title") }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ $t("emergencyGuide.process.step4.description") }}
        </p>
      </div>
    </div>
  </div>
</template>
