<template>
  <div id="app">
    <ui-container>
      <top-row @showcustom="(state) => changeStateCustomRow(state)" />
      <header-row />
      <custom-row v-if="showCustomRow" />
      <p v-if="showCustomRow" class="upgradeOptionTextWhenCustom">
        Upgrade from only
        <pounds-symbol />{{
          this.obj[this.currentIndex + 1].differenceFromSelected
        }}
        extra
      </p>
      <rows-wrapper>
        <details-row
          v-for="(entry, index) of objToShow"
          @click="() => rowClicked(entry, index)"
          :key="entry.qta"
          v-bind="entry"
        />
        <div v-if="!showAllElements" @click="showAll" class="showMoreRow">
          <p>
            Show {{ this.obj.length - this.numberOfElements }} more quantities
          </p>
        </div>
      </rows-wrapper>
    </ui-container>
  </div>
</template>

<script>
import DetailsRow from "./components/DetailsRow.vue";
import HeaderRow from "./components/HeaderRow.vue";
import RowsWrapper from "./components/RowsWrapper.vue";
import UiContainer from "./components/UIContainer.vue";
import TopRow from "./components/TopRow.vue";
import CustomRow from "./components/CustomRow.vue";
import PoundsSymbol from "./components/PoundsSymbol.vue";
export default {
  name: "App",
  components: {
    DetailsRow,
    HeaderRow,
    RowsWrapper,
    UiContainer,
    TopRow,
    CustomRow,
    PoundsSymbol,
  },
  computed: {
    objToShow() {
      return this.obj.filter((_, index) => index < this.numberOfElements);
    },
  },
  data() {
    return {
      showCustomRow: false,
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
    showAll() {
      this.showAllElements = true;
      this.numberOfElements = this.obj.length;
    },
    changeStateCustomRow(state) {
      this.showCustomRow = state;
      if (state) {
        this.numberOfElements = 4;
        this.currentEntry.selected = false;
        this.obj.forEach((elem) => (elem.differenceFromSelected = undefined));
        this.currentEntry = undefined;
        this.showAllElements = false;
      }
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
  background: white;
}

.showMoreRow p {
  color: #3797a9;
  margin: auto;
}

.upgradeOptionTextWhenCustom {
  font-size: 10px;
  margin: 3px;
  text-align: start;
}
</style>
