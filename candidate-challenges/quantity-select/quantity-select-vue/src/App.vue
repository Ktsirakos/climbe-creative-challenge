<template>
  <div id="app">
    <header-row />
    <details-row v-for="entry of obj" :key="entry.qta" v-bind="entry" />
  </div>
</template>

<script>
import DetailsRow from "./components/DetailsRow.vue";
import HeaderRow from "./components/HeaderRow.vue";
export default {
  name: "App",
  components: {
    DetailsRow,
    HeaderRow,
  },
  data() {
    return {
      obj: [
        {
          qta: 100,
          unitPrice: 0.17,
          total: 17.01,
          selected: true,
          differenceFromSelected: 0,
        },
        {
          qta: 100,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: 6.02,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
