<template>
  <v-hover>
    <div @click="onClick" id="card" slot-scope="{ hover }" :class="`elevation-${hover ? 6 : 2}`">
      <img class="img" :alt="logo" :src="logo">
      <p>{{ title }}</p>
    </div>
  </v-hover>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: { type: String, required: true },
    logo: { type: String, required: true },
    onClick: { type: Function, default: () => {} }
  }
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}

#card {
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 2px 2px 4px var(--v-grey-base);
  padding: 14px;
}

#card:hover {
  background-color: var(--v-secondary-base);
  color: var(--v-background-base);
  font-weight: 600;
}

.img {
  max-width: 50px;
}
</style>