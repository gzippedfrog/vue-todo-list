<template>
  <div id="app">
    <div class="mb-3 d-flex align-items-center justify-content-between">
      <h3 class="m-0">To do list</h3>
      <PlusButton />
    </div>

    <div class="mb-3 d-flex align-items-center justify-content-between">
      <TodoSearch />
      <TodoSort />
    </div>

    <TodoTable />

    <AddTodoModal />
  </div>
</template>

<script>
import PlusButton from "./components/PlusButton.vue";
import TodoSearch from "./components/TodoSearch.vue";
import TodoSort from "./components/TodoSort.vue";
import TodoTable from "./components/TodoTable.vue";
import AddTodoModal from "./components/AddTodoModal.vue";

export default {
  name: "App",
  components: {
    PlusButton,
    AddTodoModal,
    TodoSearch,
    TodoSort,
    TodoTable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #16191d;
  padding: 20px 20px 0;
  max-width: 1300px;
  margin: 0 auto;
}
</style>
