<template>
  <div class="uiContainer">
    <span class="uiSpan">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.uiContainer {
  padding: 3px 10px 10px 10px;
  display: grid;
  grid-template-columns: 100%;
  background: #f7f7f8;
  max-width: 500px;
  border: 1px solid #ACB0B3;
  border-radius: 5px;
}
</style>