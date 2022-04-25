<script setup lang="ts">
import emergencyNumbers from "../data/emergencyNumbers.json";
</script>

<template>
  <div class="mt-4 lg:mt-0 flex flex-col sm:flex-row justify-between items-start gap-2">
    <h2 class="font-semibold">{{ $t("menu.numbers") }}</h2>
    <input v-model="countrySearch" placeholder="🔍 Search... e.g. france" />
  </div>
  <div class="border-t border border-slate-100 mt-3 mb-6" />
  <span class="grid grid-cols-4 lg:grid-cols-5 mb-2">
    <h3 class="lg:col-span-2 font-semibold">{{ $t("country") }}</h3>
    <h3 class="text-center font-semibold">{{ $t("service.ambulance") }}</h3>
    <h3 class="text-center font-semibold">{{ $t("service.police") }}</h3>
    <h3 class="text-center font-semibold">{{ $t("service.fire") }}</h3>
  </span>
  <ul class="max-h-[80vh] lg:max-h-[75vh] overflow-auto flex flex-col">
    <li v-if="numbers.length === 0" class="text-center py-4 text-slate-400">
      {{ $t("countryUnavailable", { country: countrySearch }) }}
    </li>
    <li class="grid grid-cols-4 lg:grid-cols-5 odd:bg-emerald-50 py-2" v-for="number in numbers"
      :key="number.Country.Name">
      <span class="lg:col-span-2 ellipsis" :title="number.Country.Name">
        {{ number.Country.ISOCode }} - {{ number.Country.Name }}
      </span>
      <span class="text-center ellipsis">
        {{ number.Ambulance.All[0] }}
      </span>
      <span class="text-center ellipsis">
        {{ number.Police.All[0] }}
      </span>
      <span class="text-center ellipsis">
        {{ number.Fire.All[0] }}
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "emergency-numbers",
  watch: {
    countrySearch(newSearch: string) {
      this.numbers = newSearch ? emergencyNumbers.data.filter(
        number => number.Country.Name.toLowerCase()
          .includes(newSearch.toLowerCase())) : emergencyNumbers.data
    }
  },
  data() {
    return {
      countrySearch: "",
      numbers: emergencyNumbers.data,
    };
  },
};
</script>
