<template>
  <div class="container" :class="selected ? 'selected' : ''">
    <div class="qta">{{ qta }}</div>
    <div class="unitPrice"><pounds-symbol />{{ unitPrice }}</div>
    <div class="total"><pounds-symbol />{{ total }}</div>

    <div v-if="selected" class="selected">
      <chip message="Your selection" />
    </div>
    <div v-else class="difference">
      <p>only</p>
      <span><pounds-symbol />{{ differenceFromSelected }}</span>
      <p>extra</p>
    </div>
  </div>
</template>

<script>
import PoundsSymbol from "./PoundsSymbol.vue";
import Chip from "./Chip.vue";
export default {
  name: "DetailsRow",
  props: ["qta", "unitPrice", "total", "selected", "differenceFromSelected"],
  components: { PoundsSymbol, Chip },
  data() {
    return {};
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding: 5px 2px;
  max-width: 500px;
  border: 1px solid black;
  height: 45px;
}

.container.selected {
  border: 2px solid #3797a9;
  background: #e5f4f7;
}

.container div {
  /* height: 40px; */
  align-self: center;
}

.container .qta {
  justify-self: start;
  padding-left: 5px;
}

.container .unitPrice {
  justify-self: center;
}

.container .total {
  justify-self: end;
}

.container div.selected {
  justify-self: center;
}

.container .difference p {
  font-size: 9px;
  margin: 2px;
}

.container .difference span {
  font-size: 13px;
  margin: 0;
  color: #3797a9;
  font-weight: light;
}
</style>