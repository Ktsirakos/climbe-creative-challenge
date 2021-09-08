<template>
  <div id="app">
    <header-row />
    <rows-wrapper>
      <details-row
        v-for="(entry, index) of objToShow"
        @click="() => rowClicked(entry, index)"
        :key="entry.qta"
        v-bind="entry"
      />
      <div class="showMoreRow">
        <p>Show {{ this.obj.length - this.numberOfElements }} quantities</p>
      </div>
    </rows-wrapper>
  </div>
</template>

<script>
import DetailsRow from "./components/DetailsRow.vue";
import HeaderRow from "./components/HeaderRow.vue";
import RowsWrapper from "./components/RowsWrapper.vue";
export default {
  name: "App",
  components: {
    DetailsRow,
    HeaderRow,
    RowsWrapper,
  },
  computed: {
    objToShow() {
      return this.obj.filter((_, index) => index < this.numberOfElements);
    },
  },
  data() {
    return {
      numberOfElements: 4,
      currentEntry: undefined,
      obj: [
        {
          qta: 100,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
        {
          qta: 100,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
        {
          qta: 100,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
        {
          qta: 100,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
        {
          qta: 100,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
        {
          qta: 100,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
      ],
    };
  },
  methods: {
    rowClicked(entry, index) {
      if (this.currentEntry) {
        this.currentEntry.selected = false;
      }

      entry.selected = true;
      this.currentEntry = entry;
      this.currentIndex = index;

      this.updateDifferences();
    },
    updateDifferences() {
      this.obj.forEach((elem, index) => {
        if (index > this.currentIndex) {
          elem.differenceFromSelected = 0.45;
        } else {
          elem.differenceFromSelected = undefined;
        }
      });
    },
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

.showMoreRow {
  height: 45px;
  display: flex;
  flex-direction: row;
  align-content: center;
}

.showMoreRow p {
  color: #3797a9;
  margin: auto;
}
</style>
