<template>
  <div class="headerRowContainer">
    <div class="qta">Quantity</div>
    <div class="unitPrice">Unit Price</div>
    <div class="total">Total</div>
  </div>
</template>

<script>
export default {
  name: "HeaderRow",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
.headerRowContainer {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding: 10px 5px;
  max-width: 500px;
}

.headerRowContainer .qta {
  justify-self: start;
  padding-left: 5px;
}

.headerRowContainer .unitPrice {
  justify-self: center;
}

.headerRowContainer .total {
  justify-self: end;
}

.headerRowContainer div {
  /* justify-self: center; */
  width: auto;
  font-size: 10px;
}
</style>