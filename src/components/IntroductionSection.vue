<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="introduction flex-1">
    <h1 class="-top-2 text-left-center text-teal-600">{{ $t(msg) }}</h1>
    <h3 class="text-left-center">{{ $t("home.description") }}</h3>
  </div>
</template>
