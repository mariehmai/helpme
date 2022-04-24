<template>
  <div class="locale-selector absolute right-0 top-0 lg:-left-0">
    <select v-model="selected" v-on:change="changeLocale">
      <option v-for="lang in languages" :key="lang.locale" :value="lang">
        {{ lang.title }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { languages } from "../plugins/i18n";

export default defineComponent({
  name: "locale-selector",
  methods: {
    changeLocale() {
      if (this.selected?.locale) {
        this.$i18n.locale = this.selected?.locale;
      }
    },
  },
  setup() {
    const { t, n } = useI18n({
      useScope: "global",
    });
    return { t, n };
  },
  data() {
    return { languages, selected: languages.find(lang => lang.locale === this.$i18n.locale) };
  },
});
</script>
