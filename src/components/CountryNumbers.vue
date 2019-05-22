<template>
  <div id="country-numbers">
    <div class="numbers-container">
      <div class="service-card">
        <img alt="fire" src="@/assets/menu/police.svg">
        <h3>{{$t('service.police')}}</h3>
        <h1>{{country.police}}</h1>
      </div>
      <div class="service-card">
        <img alt="fire" src="@/assets/alert/fire-truck.svg">
        <h3>{{$t('service.fire')}}</h3>
        <h1>{{country.fire}}</h1>
      </div>
      <div class="service-card">
        <img alt="fire" src="@/assets/menu/hospital.svg">
        <h3>{{$t('service.ambulance')}}</h3>
        <h1>{{country.ambulance}}</h1>
      </div>
    </div>
    <v-divider/>
    <h2>{{country.name}}</h2>
  </div>
</template>

<script>
export default {
  name: "CountryNumbers",
  props: {
    country: {
      type: Object,
      required: true,
      default: {
        code: "",
        police: "",
        fire: "",
        ambulance: "",
        name: ""
      }
    }
  }
};
</script>

<style scoped>
#country-numbers {
  margin: 20px 0;
  border-radius: 8px;
  border: 1px solid #d3dbd7;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

h2 {
  margin: 8px 0;
}

img {
  height: 70px;
}

.numbers-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.service-card {
  margin: 20px;
  width: 120px;
  border-radius: 8px;
}
</style>