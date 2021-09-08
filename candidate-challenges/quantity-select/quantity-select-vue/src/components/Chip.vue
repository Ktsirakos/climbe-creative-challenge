<template>
  <div class="chipContainer">{{ message }}</div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style>
.chipContainer {
  background: #3797a9;
  border-radius: 25px;
  font-size: 10px;
  color: white;
  padding: 5px 10px;
}
</style>