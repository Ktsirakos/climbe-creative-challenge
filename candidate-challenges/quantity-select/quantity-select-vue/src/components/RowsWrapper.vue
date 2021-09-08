<template>
  <div class="rowsWrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.rowsWrapper {
  max-width: 500px;
  border: 1px solid #ACB0B3;
  border-radius: 5px;
  z-index: 2;
}
</style>