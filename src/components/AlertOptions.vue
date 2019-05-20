<template>
  <div id="alert-options">
    <Card
      v-for="option in alertOptions"
      :key="option.type"
      class="alert-option"
      :onClick="() => playSound(option)"
      :title="option.title"
      :logo="require(`@/assets/alert/${option.logo}`)"
    />
  </div>
</template>

<script>
import i18n from "@/plugins/i18n";
import Card from "@/components/Card";
import alertOptions from "@/data/alertOptions";
import { setTimeout } from "timers";

export default {
  name: "AlertOptions",
  props: {
    audio: { type: Audio }
  },
  data() {
    return {
      alertOptions
    };
  },
  methods: {
    playSound(sound) {
      if (sound.audio) {
        const lang = i18n.locale;
        this.audio.src = require(`@/sounds/${sound.audio}${
          sound.i18n ? `-${lang}` : ""
        }.mp3`);
        this.audio.load();
        this.audio.play();
      }
    }
  },
  components: {
    Card
  }
};
</script>

<style scoped>
#alert-options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.alert-option {
  margin: 5px;
  width: 110px;
}
</style>