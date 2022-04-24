<template>
  <div id="emergency-numbers">
    <h1 class="main-title">{{$t('menu.numbers')}}</h1>
    <CountryNumbers :country="currentCountry"/>
    <v-card>
      <v-card-title>
        {{$t('menu.numbers')}}
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="emergencyNumbers" :search="search">
        <template v-slot:items="props">
          <td class="text-xs-left country">
            <img :alt="props.item.flag" :src="props.item.flag">
            {{ props.item.countryName }}
          </td>
          <!-- <td class="text-xs-right">{{ props.item.police }}</td>
          <td class="text-xs-right">{{ props.item.fire }}</td>
          <td class="text-xs-right">{{ props.item.ambulance }}</td> -->
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

import CountryNumbers from "@/components/CountryNumbers";
import emergencyNumbers from "@/data/mocks/emergencyNumbers";

export default {
  name: "EmergencyNumbers",
  data() {
    return {
      search: "",
      currentCountry: {
        code: "",
        police: "",
        fire: "",
        ambulance: "",
        name: ""
      },
      emergencyNumbers: emergencyNumbers.data.map(country => {
        const formattedCountryName = country.Country.Name.split(" ")
          .join("-")
          .toLowerCase();

        let flag;
        try {
          flag = require(`@/assets/flags/${formattedCountryName}.svg`);
        } catch (err) {
          flag = require("@/assets/flags/default.svg");
        }

        return {
          countryName: country.Country.Name,
          countryCode: country.Country.ISOCode.toLowerCase(),
          flag,
          police: country.Police.All[0],
          ambulance: country.Ambulance.All[0],
          fire: country.Fire.All[0]
        };
      }),
      headers: [
        {
          text: this.$i18n.t("country"),
          value: "countryName"
        },
        {
          text: this.$i18n.t("service.police"),
          align: "right",
          sortable: false,
          value: "police"
        },
        {
          text: this.$i18n.t("service.fire"),
          align: "right",
          sortable: false,
          value: "fire"
        },
        {
          text: this.$i18n.t("service.ambulance"),
          align: "right",
          sortable: false,
          value: "ambulance"
        }
      ]
    };
  },
  mounted() {
    const IP_API_URL =
      "http://ip-api.com/json/80.201.88.121?fields=countryCode";
    axios.get(IP_API_URL).then(response => {
      const country = emergencyNumbers.data.find(
        country =>
          country.Country.ISOCode.toLowerCase() ===
          response.data.countryCode.toLowerCase()
      );

      this.currentCountry = {
        code: response.data.countryCode,
        police: country.Police.All[0],
        ambulance: country.Ambulance.All[0],
        fire: country.Fire.All[0],
        name: country.Country.Name
      };
    });
  },
  components: {
    CountryNumbers
  }
};
</script>

<style scoped>
#emergency-numbers {
  margin: 40px 0;
}

img {
  width: 24px;
  margin-right: 12px;
}

.country {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
