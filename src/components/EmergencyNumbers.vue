<template>
  <div class="max-w-2xl mx-auto py-8">
    <div class="flex flex-col gap-6">
      <!-- Header Section -->
      <div class="flex items-center justify-between flex-wrap">
        <h2
          class="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white"
        >
          {{ $t("menu.numbers") }}
          <span
            class="text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700"
          >
            {{ filteredNumbers.length }} {{ $t("countries") }}
          </span>
        </h2>
      </div>

      <!-- Search and Filters -->
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 items-center flex-wrap">
          <div class="relative flex-1 max-w-md">
            <span
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none"
            >
              🔍
            </span>
            <input
              id="emergency-search"
              v-model="searchQuery"
              :placeholder="$t('search.placeholder')"
              class="w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              @input="onSearchInput"
              autocomplete="off"
            />
            <button
              v-if="searchQuery"
              @click="clearSearch"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-none border-none text-gray-400 dark:text-gray-500 cursor-pointer p-1 rounded-full transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              :aria-label="$t('search.clear')"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- Service Filter Buttons -->
        <div class="flex gap-3 flex-wrap justify-center sm:justify-start">
          <button
            v-for="service in serviceTypes"
            :key="service.key"
            @click="toggleServiceFilter(service.key)"
            class="px-4 py-2 border rounded-lg cursor-pointer transition-all duration-200 text-sm font-medium"
            :class="
              activeFilters.includes(service.key)
                ? 'bg-teal-600 border-teal-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-gray-700'
            "
            :title="$t(service.i18nKey)"
          >
            {{ service.emoji }} {{ $t(service.i18nKey) }}
          </button>
        </div>
      </div>
    </div>

    <div class="h-px bg-gray-200 dark:bg-gray-700 my-8"></div>

    <!-- Emergency Numbers Table -->
    <div class="w-full space-y-3">
      <!-- Desktop Header -->
      <div
        class="hidden lg:grid grid-cols-5 gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg font-semibold text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
      >
        <div class="col-span-2 flex items-center">
          <button
            @click="toggleSort('country')"
            class="bg-none border-none text-gray-900 dark:text-gray-100 cursor-pointer flex items-center gap-2 font-semibold text-base hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            {{ $t("country") }}
            <span
              class="text-xs transition-transform duration-200"
              :class="getSortIconClass('country')"
              >↕️</span
            >
          </button>
        </div>
        <div class="text-center flex items-center justify-center">
          <span>🚑 {{ $t("service.ambulance") }}</span>
        </div>
        <div class="text-center flex items-center justify-center">
          <span>👮 {{ $t("service.police") }}</span>
        </div>
        <div class="text-center flex items-center justify-center">
          <span>🚒 {{ $t("service.fire") }}</span>
        </div>
      </div>

      <!-- Mobile Header -->
      <div
        class="lg:hidden p-4 bg-gray-100 dark:bg-gray-800 rounded-lg font-semibold text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
      >
        <button
          @click="toggleSort('country')"
          class="bg-none border-none text-gray-900 dark:text-gray-100 cursor-pointer flex items-center gap-2 font-semibold text-base hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          {{ $t("country") }}
          <span
            class="text-xs transition-transform duration-200"
            :class="getSortIconClass('country')"
            >↕️</span
          >
        </button>
      </div>

      <!-- No Results State -->
      <div v-if="filteredNumbers.length === 0" class="text-center py-16">
        <div class="text-6xl mb-4 opacity-50">🔍</div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {{ $t("noResults.title") }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          {{ $t("noResults.message") }}
        </p>
        <button
          @click="clearAllFilters"
          class="px-6 py-3 bg-teal-600 text-white border-none rounded-lg cursor-pointer font-medium transition-all duration-200 hover:bg-teal-700 shadow-md hover:shadow-lg"
        >
          {{ $t("noResults.clearFilters") }}
        </button>
      </div>

      <!-- Countries List -->
      <div v-else class="w-full space-y-2">
        <!-- Desktop View -->
        <div
          v-for="(country, index) in paginatedNumbers"
          :key="country.Country.Name"
          class="hidden lg:grid grid-cols-5 gap-4 p-4 rounded-lg cursor-pointer transition-all duration-200 items-center hover:bg-gray-100 dark:hover:bg-gray-800 hover:-translate-y-0.5"
          :class="{
            'bg-gray-100 dark:bg-gray-800 -translate-y-0.5':
              highlightedIndex === index,
          }"
          @click="selectCountry(country)"
          :tabindex="0"
          @keydown="onRowKeydown($event, country)"
        >
          <div class="col-span-2 flex items-center gap-3">
            <div class="flex items-center gap-2 text-xl">
              {{ getCountryFlag(country.Country.ISOCode) }}
              <span
                class="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded border border-gray-200 dark:border-gray-600"
              >
                {{ country.Country.ISOCode }}
              </span>
            </div>
            <span
              class="font-medium text-gray-900 dark:text-gray-100"
              :title="country.Country.Name"
            >
              {{ country.Country.Name }}
            </span>
          </div>

          <div class="text-center">
            <a
              :href="`tel:${country.Ambulance.All[0]}`"
              class="text-teal-600 dark:text-teal-400 no-underline font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-teal-600 hover:text-white inline-block"
              @click.stop
              :title="$t('callService', { service: $t('service.ambulance') })"
            >
              {{ country.Ambulance.All[0] || "—" }}
            </a>
          </div>

          <div class="text-center">
            <a
              :href="`tel:${country.Police.All[0]}`"
              class="text-blue-600 dark:text-blue-400 no-underline font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-600 hover:text-white inline-block"
              @click.stop
              :title="$t('callService', { service: $t('service.police') })"
            >
              {{ country.Police.All[0] || "—" }}
            </a>
          </div>

          <div class="text-center">
            <a
              :href="`tel:${country.Fire.All[0]}`"
              class="text-purple-600 dark:text-purple-400 no-underline font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-purple-600 hover:text-white inline-block"
              @click.stop
              :title="$t('callService', { service: $t('service.fire') })"
            >
              {{ country.Fire.All[0] || "—" }}
            </a>
          </div>
        </div>

        <!-- Mobile View -->
        <div
          v-for="(country, index) in paginatedNumbers"
          :key="`mobile-${country.Country.Name}`"
          class="lg:hidden p-4 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:-translate-y-0.5"
          :class="{
            'bg-gray-100 dark:bg-gray-800 -translate-y-0.5':
              highlightedIndex === index,
          }"
          @click="selectCountry(country)"
          :tabindex="0"
          @keydown="onRowKeydown($event, country)"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="flex items-center gap-2 text-xl">
              {{ getCountryFlag(country.Country.ISOCode) }}
              <span
                class="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded border border-gray-200 dark:border-gray-600"
              >
                {{ country.Country.ISOCode }}
              </span>
            </div>
            <span
              class="font-medium text-gray-900 dark:text-gray-100 text-lg"
              :title="country.Country.Name"
            >
              {{ country.Country.Name }}
            </span>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="text-center">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                🚑
              </div>
              <a
                :href="`tel:${country.Ambulance.All[0]}`"
                class="text-teal-600 dark:text-teal-400 no-underline font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-teal-600 hover:text-white block"
                @click.stop
                :title="$t('callService', { service: $t('service.ambulance') })"
              >
                {{ country.Ambulance.All[0] || "—" }}
              </a>
            </div>

            <div class="text-center">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                👮
              </div>
              <a
                :href="`tel:${country.Police.All[0]}`"
                class="text-blue-600 dark:text-blue-400 no-underline font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-600 hover:text-white block"
                @click.stop
                :title="$t('callService', { service: $t('service.police') })"
              >
                {{ country.Police.All[0] || "—" }}
              </a>
            </div>

            <div class="text-center">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                🚒
              </div>
              <a
                :href="`tel:${country.Fire.All[0]}`"
                class="text-purple-600 dark:text-purple-400 no-underline font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-purple-600 hover:text-white block"
                @click.stop
                :title="$t('callService', { service: $t('service.fire') })"
              >
                {{ country.Fire.All[0] || "—" }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div
        v-if="totalPages > 1"
        class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 p-4"
      >
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer transition-all duration-200 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-teal-500 dark:hover:border-teal-500 font-medium"
        >
          ← {{ $t("pagination.previous") }}
        </button>

        <span class="font-medium text-gray-700 dark:text-gray-300 text-center">
          {{
            $t("pagination.info", { current: currentPage, total: totalPages })
          }}
        </span>

        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer transition-all duration-200 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-teal-500 dark:hover:border-teal-500 font-medium"
        >
          {{ $t("pagination.next") }} →
        </button>
      </div>
    </div>

    <!-- Country Details Modal -->
    <Teleport to="body">
      <div
        v-if="selectedCountry"
        class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        @click="closeModal"
      >
        <div
          class="bg-white dark:bg-gray-800 rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto border border-gray-200 dark:border-gray-700 shadow-2xl"
          @click.stop
        >
          <div
            class="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ $t("modal.title", { country: selectedCountry.Country.Name }) }}
            </h3>
            <button
              @click="closeModal"
              class="bg-none border-none text-xl cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              ✕
            </button>
          </div>
          <div class="p-6">
            <div class="flex flex-col gap-6">
              <!-- Ambulance Section -->
              <div class="flex gap-4 items-start">
                <div
                  class="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl"
                >
                  🚑
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold mb-3 text-gray-900 dark:text-white">
                    {{ $t("service.ambulance") }}
                  </h4>
                  <div class="flex flex-col gap-2">
                    <a
                      v-for="number in selectedCountry.Ambulance.All"
                      :key="number"
                      :href="`tel:${number}`"
                      class="text-teal-600 dark:text-teal-400 no-underline font-medium px-3 py-2 rounded-lg transition-all duration-200 inline-block hover:bg-teal-600 hover:text-white border border-teal-200 dark:border-teal-800"
                    >
                      {{ number }}
                    </a>
                  </div>
                </div>
              </div>

              <!-- Police Section -->
              <div class="flex gap-4 items-start">
                <div
                  class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl"
                >
                  👮
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold mb-3 text-gray-900 dark:text-white">
                    {{ $t("service.police") }}
                  </h4>
                  <div class="flex flex-col gap-2">
                    <a
                      v-for="number in selectedCountry.Police.All"
                      :key="number"
                      :href="`tel:${number}`"
                      class="text-blue-600 dark:text-blue-400 no-underline font-medium px-3 py-2 rounded-lg transition-all duration-200 inline-block hover:bg-blue-600 hover:text-white border border-blue-200 dark:border-blue-800"
                    >
                      {{ number }}
                    </a>
                  </div>
                </div>
              </div>

              <!-- Fire Section -->
              <div class="flex gap-4 items-start">
                <div
                  class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl"
                >
                  🚒
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold mb-3 text-gray-900 dark:text-white">
                    {{ $t("service.fire") }}
                  </h4>
                  <div class="flex flex-col gap-2">
                    <a
                      v-for="number in selectedCountry.Fire.All"
                      :key="number"
                      :href="`tel:${number}`"
                      class="text-purple-600 dark:text-purple-400 no-underline font-medium px-3 py-2 rounded-lg transition-all duration-200 inline-block hover:bg-purple-600 hover:text-white border border-purple-200 dark:border-purple-800"
                    >
                      {{ number }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import emergencyNumbers from "@/data/emergencyNumbers.json";
import { getCountryFlag } from "@/data/countryFlags";
import {
  ITEMS_PER_PAGE,
  serviceTypes,
  type EmergencyNumber,
} from "@/data/emergency";

const searchQuery = ref("");
const activeFilters = ref<string[]>([]);
const sortField = ref<"country" | null>(null);
const sortDirection = ref<"asc" | "desc">("asc");
const selectedCountry = ref<EmergencyNumber | null>(null);
const highlightedIndex = ref(-1);
const currentPage = ref(1);
const itemsPerPage = ITEMS_PER_PAGE;

const filteredNumbers = computed(() => {
  let results = emergencyNumbers.data as EmergencyNumber[];

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    results = results.filter(
      (country) =>
        country.Country.Name.toLowerCase().includes(query) ||
        country.Country.ISOCode.toLowerCase().includes(query)
    );
  }

  if (activeFilters.value.length > 0) {
    results = results.filter((country) => {
      return activeFilters.value.some((filter) => {
        switch (filter) {
          case "ambulance":
            return (
              country.Ambulance.All.length > 0 &&
              country.Ambulance.All[0] !== ""
            );
          case "police":
            return (
              country.Police.All.length > 0 && country.Police.All[0] !== ""
            );
          case "fire":
            return country.Fire.All.length > 0 && country.Fire.All[0] !== "";
          default:
            return true;
        }
      });
    });
  }

  if (sortField.value === "country") {
    results.sort((a, b) => {
      const comparison = a.Country.Name.localeCompare(b.Country.Name);
      return sortDirection.value === "asc" ? comparison : -comparison;
    });
  }

  return results;
});

const totalPages = computed(() =>
  Math.ceil(filteredNumbers.value.length / itemsPerPage)
);

const paginatedNumbers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredNumbers.value.slice(start, end);
});

function onSearchInput() {
  currentPage.value = 1;
  highlightedIndex.value = -1;
}

function clearSearch() {
  searchQuery.value = "";
  currentPage.value = 1;
}

function toggleServiceFilter(serviceKey: string) {
  const index = activeFilters.value.indexOf(serviceKey);
  if (index > -1) {
    activeFilters.value.splice(index, 1);
  } else {
    activeFilters.value.push(serviceKey);
  }
  currentPage.value = 1;
}

function toggleSort(field: "country") {
  if (sortField.value === field) {
    sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
  } else {
    sortField.value = field;
    sortDirection.value = "asc";
  }
}

function getSortIconClass(field: string) {
  if (sortField.value !== field) return "";
  return sortDirection.value === "asc" ? "rotate-0" : "rotate-180";
}

function clearAllFilters() {
  searchQuery.value = "";
  activeFilters.value = [];
  sortField.value = null;
  currentPage.value = 1;
}

function selectCountry(country: EmergencyNumber) {
  selectedCountry.value = country;
}

function closeModal() {
  selectedCountry.value = null;
}

function onRowKeydown(event: KeyboardEvent, country: EmergencyNumber) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    selectCountry(country);
  }
}

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}
</script>
