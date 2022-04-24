<script setup lang="ts">
import emergencyNumbers from "../data/emergencyNumbers.json";
</script>

<template>
  <h2 class="font-semibold mt-6 lg:mt-0">{{ $t("menu.numbers") }}</h2>
  <div class="border-t border border-slate-100 mt-3 mb-6" />
  <span class="grid grid-cols-4 lg:grid-cols-5 mb-2">
    <h3 class="lg:col-span-2 font-semibold">{{ $t("country") }}</h3>
    <h3 class="text-center font-semibold">{{ $t("service.ambulance") }}</h3>
    <h3 class="text-center font-semibold">{{ $t("service.police") }}</h3>
    <h3 class="text-center font-semibold">{{ $t("service.fire") }}</h3>
  </span>
  <ul class="max-h-[80vh] lg:max-h-[75vh] overflow-auto gap-2 flex flex-col">
    <li class="grid grid-cols-4 lg:grid-cols-5" v-for="number in numbers" :key="number.Country.Name">
      <span class="lg:col-span-2">
        {{ number.Country.ISOCode }} - {{ number.Country.Name }}
      </span>
      <span class="text-center">
        {{ number.Ambulance.All[0] }}
      </span>
      <span class="text-center">
        {{ number.Police.All[0] }}
      </span>
      <span class="text-center">
        {{ number.Fire.All[0] }}
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "emergency-numbers",
  data() {
    return { numbers: emergencyNumbers.data };
  },
};
</script>
