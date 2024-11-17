<template>
  <div id="app">
    <VehicleForm />
  </div>
</template>

<script>
import VehicleForm from './components/VehicleForm.vue';

export default {
  name: 'App',
  components: {
    VehicleForm
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
