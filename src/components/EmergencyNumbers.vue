<template>
  <div id="emergency-numbers">
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
          <td class="text-xs-right">{{ props.item.police }}</td>
          <td class="text-xs-right">{{ props.item.fire }}</td>
          <td class="text-xs-right">{{ props.item.ambulance }}</td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import emergencyNumbers from "@/data/mocks/emergencyNumbers";

export default {
  name: "EmergencyNumbers",
  data() {
    return {
      search: "",
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
          text: "Countries",
          value: "countryName"
        },
        { text: "Police", align: "right", sortable: false, value: "police" },
        {
          text: "Fire brigade",
          align: "right",
          sortable: false,
          value: "fire"
        },
        {
          text: "Ambulance",
          align: "right",
          sortable: false,
          value: "ambulance"
        }
      ]
    };
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
