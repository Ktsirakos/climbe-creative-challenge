<template>
  <div class="topRow">
    <p>Quantity</p>
    <checkbox
      @click="(state) => $emit('showcustom', state)"
      :checked="checked"
      label="Custom Quantity"
    />
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
export default {
  props: ["checked"],
  components: {
    Checkbox,
  },
};
</script>

<style>
.topRow {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}

.topRow div {
  align-self: center;
}
</style>