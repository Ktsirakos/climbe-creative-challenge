<template>
  <div class="customRowContainer">
    <input type="text" v-model="quantityModel" />
    <p id="unitPrice"><pounds-symbol />{{ unitPrice }}</p>
    <p id="total"><pounds-symbol />{{ total }}</p>
    <chip id="chip" message="Your selection" />
  </div>
</template>

<script>
import Chip from "./Chip.vue";
import PoundsSymbol from "./PoundsSymbol.vue";
export default {
  components: {
    Chip,
    PoundsSymbol,
  },
  props: ["quantity", "unitPrice", "total"],
  data() {
    return {
      quantityModel: 50,
    };
  },
};
</script>

<style
Chip>
.customRowContainer {
  margin: 10px 0px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}

.customRowContainer input {
  height: 40px;
  border: 2px solid #3797a9;
  border-radius: 5px;
  background: #e5f4f6;
  font-size: 16px;
  padding-left: 5px;
}

.customRowContainer #total {
  justify-self: end;
}

.customRowContainer #chip {
  justify-self: center;
  align-self: center;
}
</style>