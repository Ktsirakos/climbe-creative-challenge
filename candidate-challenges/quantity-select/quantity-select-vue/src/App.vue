<template>
  <div id="app">
    <ui-container>
      <top-row
        :checked="showCustomRow"
        @showcustom="(state) => changeStateCustomRow(state)"
      />
      <header-row />
      <custom-row
        v-if="showCustomRow"
        @updated="(e) => updatedInput(e)"
        :quantity="currentEntry.qta"
        :total="currentEntry.total"
        :unitPrice="currentEntry.unitPrice"
      />
      <!-- <p v-if="showCustomRow" class="upgradeOptionTextWhenCustom">
        Upgrade from only
        <pounds-symbol />{{
          this.obj[this.currentIndex + 1].differenceFromSelected
        }}
        extra
      </p> -->
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
// import PoundsSymbol from "./components/PoundsSymbol.vue";
export default {
  name: "App",
  components: {
    DetailsRow,
    HeaderRow,
    RowsWrapper,
    UiContainer,
    TopRow,
    CustomRow,
    // PoundsSymbol,
  },
  mounted() {
    this.objToShow = this.obj.filter(
      (_, index) => index < this.numberOfElements
    );
  },
  data() {
    return {
      objToShow: [],
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
          qta: 200,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
        {
          qta: 300,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
        {
          qta: 400,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
        {
          qta: 500,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
        {
          qta: 600,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
        {
          qta: 300,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
        {
          qta: 400,
          unitPrice: 0.17,
          total: 17.01,
          selected: false,
          differenceFromSelected: undefined,
        },
        {
          qta: 500,
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
      this.showCustomRow = false;

      if (this.currentEntry) {
        this.currentEntry.selected = false;
      }

      entry.selected = true;
      this.currentEntry = entry;
      this.currentIndex = index;

      if (this.currentIndex === this.numberOfElements - 1) {
        this.show2More();
      }

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
      this.objToShow = this.obj;
    },
    changeStateCustomRow(state) {
      this.showCustomRow = state;

      if (state) {
        if (this.currentEntry) {
          this.currentEntry.selected = false;
        }

        this.numberOfElements = 4;
        this.obj.forEach((elem) => (elem.differenceFromSelected = undefined));
        this.objToShow = this.obj.filter(
          (_, index) => index < this.numberOfElements
        );
        // this.currentEntry = undefined;
        this.showAllElements = false;
      }
    },
    updatedInput(e) {
      this.console.log(e);
    },
    show2More() {
      if (this.obj.length <= this.numberOfElements + 2) {
        this.showAll();
      } else {
        this.numberOfElements += 2;
        this.objToShow = this.obj.filter(
          (_, index) => index < this.numberOfElements
        );
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
