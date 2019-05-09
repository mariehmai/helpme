<template>
  <div id="alert-options">
    <Card
      v-for="option in alertOptions"
      :key="option.type"
      class="alert-option"
      :onClick="onAlertOptionClick"
      :title="option.title"
      :logo="require(`@/assets/alert/${option.logo}`)"
    />
  </div>
</template>

<script>
import Card from "@/components/Card";
import alertOptions from "@/data/alertOptions";

export default {
  name: "AlertOptions",
  data() {
    return {
      alertOptions
    };
  },
  methods: {
    onAlertOptionClick() {}
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