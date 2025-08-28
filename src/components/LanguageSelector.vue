<template>
  <div class="relative">
    <div class="relative">
      <button
        ref="buttonRef"
        @click="toggleDropdown"
        class="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer transition-all duration-200 text-gray-700 dark:text-gray-300 text-sm min-w-[80px] hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
        :aria-expanded="isOpen"
        aria-haspopup="true"
      >
        <span class="flex items-center gap-2">
          <span class="text-xl leading-none">{{ currentLanguage.flag }}</span>
          <span
            class="font-semibold text-xs text-gray-800 dark:text-gray-200"
            >{{ currentLanguage.code }}</span
          >
        </span>
        <svg
          class="transition-transform duration-200 text-gray-500 dark:text-gray-400 opacity-70"
          :class="{ 'rotate-180': isOpen }"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </button>

      <Teleport to="body">
        <div
          v-if="isOpen"
          class="fixed inset-0 bg-transparent z-[9998]"
          @click="closeDropdown"
        >
          <div
            class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl backdrop-blur-sm p-2 min-w-[200px] max-h-[300px] overflow-y-auto animate-in slide-in-from-top-2 duration-150"
            :style="dropdownStyle"
            @click.stop
          >
            <button
              v-for="lang in languages"
              :key="lang.locale"
              @click="selectLanguage(lang)"
              class="flex items-center gap-3 w-full p-3 bg-transparent border-none rounded-lg cursor-pointer transition-all duration-200 text-gray-700 dark:text-gray-300 text-sm text-left hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              :class="{
                'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400':
                  lang.locale === currentLocale,
              }"
            >
              <span class="text-xl leading-none">{{ lang.flag }}</span>
              <div class="flex flex-col gap-0.5 flex-1">
                <span
                  class="font-medium text-gray-800 dark:text-gray-200"
                  :class="{
                    'font-semibold text-emerald-600 dark:text-emerald-400':
                      lang.locale === currentLocale,
                  }"
                >
                  {{ lang.title }}
                </span>
                <span
                  class="text-xs text-gray-600 dark:text-gray-400 opacity-70"
                >
                  {{ lang.native }}
                </span>
              </div>
              <svg
                v-if="lang.locale === currentLocale"
                class="text-emerald-500 flex-shrink-0"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="20,6 9,17 4,12"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </Teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted, nextTick } from "vue";
import { useI18n } from "vue-i18n";
import { languages, type Language } from "@/data/languages";

const { locale } = useI18n();
const isOpen = ref(false);
const buttonRef = ref<HTMLElement>();
const dropdownStyle = ref({});

const currentLocale = computed(() => locale.value);

const currentLanguage = computed(() => {
  return (
    languages.find((lang) => lang.locale === currentLocale.value) ||
    languages[0]
  );
});

function toggleDropdown() {
  if (isOpen.value) {
    closeDropdown();
  } else {
    openDropdown();
  }
}

async function openDropdown() {
  isOpen.value = true;
  await nextTick();
  calculateDropdownPosition();
  document.addEventListener("keydown", handleKeydown);
}

function closeDropdown() {
  isOpen.value = false;
  document.removeEventListener("keydown", handleKeydown);
}

function selectLanguage(lang: Language) {
  locale.value = lang.locale;
  closeDropdown();
}

function calculateDropdownPosition() {
  if (!buttonRef.value) return;

  const button = buttonRef.value;
  const rect = button.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  let top = rect.bottom + 8;
  let left = rect.left;

  const dropdownHeight = 200;
  if (top + dropdownHeight > viewportHeight) {
    top = rect.top - dropdownHeight - 8;
  }

  const dropdownWidth = 200;
  if (left + dropdownWidth > viewportWidth) {
    left = rect.right - dropdownWidth;
  }

  dropdownStyle.value = {
    position: "fixed",
    top: `${top}px`,
    left: `${left}px`,
    zIndex: "9999",
  };
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeDropdown();
  }
}

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>
