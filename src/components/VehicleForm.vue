<template>
  <div>
    <h1>Select Vehicle</h1>

    <!-- Year Dropdown -->
    <select v-model="selectedYear" @change="fetchMakes">
      <option disabled value="">Select Year</option>
      <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
    </select>

    <!-- Make Dropdown -->
    <select v-model="selectedMake" @change="fetchModels" :disabled="!selectedYear">
      <option disabled value="">Select Make</option>
      <option v-for="make in makes" :key="make" :value="make">{{ make }}</option>
    </select>

    <!-- Model Dropdown -->
    <select v-model="selectedModel" :disabled="!selectedMake">
      <option disabled value="">Select Model</option>
      <option v-for="model in models" :key="model" :value="model">{{ model }}</option>
    </select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      years: [],
      makes: [],
      models: [],
      selectedYear: "",
      selectedMake: "",
      selectedModel: ""
    };
  },
  methods: {
    async fetchYears() {
      try {
        const response = await axios.get('https://vehicle-dropdown.vercel.app/api/fetchData', {
          params: {
            type: 'years',
            token: '5cbe12fb62f4941267d623499a2a4fd5948fd3ef',
          },
        });
        const years = response.data.map(item => item.year);
        this.years = years;
      } catch (error) {
        console.error('Error fetching years:', error);
      }
    },
    async fetchMakes() {
      if (!this.selectedYear) return;
      try {
        const response = await axios.get('https://vehicle-dropdown.vercel.app/api/fetchData', {
          params: {
            type: 'makes',
            token: '5cbe12fb62f4941267d623499a2a4fd5948fd3ef',
            year: this.selectedYear
          },
        });
        const makes = response.data.map(item => item.make);
        this.makes = makes;
        this.selectedMake = "";
        this.models = [];
      } catch (error) {
        console.error('Error fetching makes:', error);
      }
    },
    async fetchModels() {
      if (!this.selectedMake) return;
      try {
        const response = await axios.get('https://vehicle-dropdown.vercel.app/api/fetchData', {
          params: {
            type: 'models',
            token: '5cbe12fb62f4941267d623499a2a4fd5948fd3ef',
            year: this.selectedYear,
            make: this.selectedMake
          },
        });
        const models = response.data.map(item => item.model);
        this.models = models;
      } catch (error) {
        console.error('Error fetching makes:', error);
      }
    }
  },
  created() {
    this.fetchYears();
  }
};
</script>

<style scoped>
select {
  margin: 10px;
  padding: 8px;
}
</style>
