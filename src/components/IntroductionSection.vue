<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="introduction">
    <h1 class="green -top-2 text-left-center">{{ $t(msg) }}</h1>
    <h3 class="text-left-center">{{ $t("home.description") }}</h3>
  </div>
</template>
