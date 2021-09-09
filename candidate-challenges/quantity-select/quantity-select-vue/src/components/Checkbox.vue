<template>
  <div class="checkboxContainer">
    <p>{{ label }}</p>
    <input
      :checked="checked"
      @click="(e) => $emit('click', e.target.checked)"
      type="checkbox"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "checked"],
};
</script>

<style>
.checkboxContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.checkboxContainer p {
  font-size: 12px;
  margin-right: 5px;
}

.checkboxContainer input {
  align-self: center;
}

.checkboxContainer > input {
  height: 20px;
  width: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid #3797a9;
  border-radius: 4px;
  outline: none;
  background-color: white;
}

.checkboxContainer > input:checked {
  background-color: #3797a9;
}

.checkboxContainer > input:checked::after {
  background-color: #3797a9;
  content: "✓";
  color: white;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>