<template>
  <div id="language-select">
    <v-combobox v-model="languageSelected" :items="languages.map(l => l.title)">
      <template v-slot:selection="data">
        <v-chip
          :key="JSON.stringify(data.item)"
          :selected="data.selected"
          :disabled="data.disabled"
          @click.stop="data.parent.selectedIndex = data.index"
          @input="data.parent.selectItem(data.item)"
          :change="changeLocale(languages.find(l => l.title === data.item).language)"
        >
          <v-avatar>
            <img
              :src="require(`@/assets/flags/${languages.find(l => l.title === data.item).icon}`)"
              :alt="data.item"
            >
          </v-avatar>
          {{ data.item.slice(0, 2).toUpperCase() }}
        </v-chip>
      </template>
    </v-combobox>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n";
import languages from "@/plugins/i18n/languages";

export default {
  name: "LanguageSelect",
  data() {
    return {
      languages,
      languageSelected: languages[0].title
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>

<style scoped>
#language-select {
  width: 95px;
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 10px;
}
</style>