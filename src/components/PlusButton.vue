<template>
  <button v-b-modal.add-todo-modal></button>
</template>

<script>
export default {
  name: "PlusButton",
};
</script>

<style lang="scss" scoped>
button {
  position: relative;
  width: 40px;
  height: 40px;
  background-color: #d6dbeb;
  cursor: pointer;
  border-radius: 50%;
  border: none;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #314b99;
    height: 2px;
    width: 50%;
  }

  &:after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
}
</style>
