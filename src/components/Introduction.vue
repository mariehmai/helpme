<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="introduction">
    <h1 class="green">{{ msg }}</h1>
    <h3>This page gives you basic information for emergency situations.</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.introduction h1,
.introduction h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .introduction h1,
  .introduction h3 {
    text-align: left;
  }
}
</style>
