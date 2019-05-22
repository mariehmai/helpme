<template>
  <v-hover>
    <div
      @click="onClick"
      id="card"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 6 : outlined ? 0 : 2} ${outlined ? 'outlined' : ''}`"
    >
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
    outlined: { type: Boolean, default: false },
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
  background-image: linear-gradient(
    -225deg,
    var(--v-contrast-base) 0%,
    var(--v-contrast-darken1) 100%
  );
}

#card:hover {
  font-weight: 500;
}

#card.outlined {
  background: transparent;
}

.img {
  max-width: 50px;
}
</style>