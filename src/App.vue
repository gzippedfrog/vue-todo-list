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
  padding: 104px 20px 0;
  max-width: 1300px;
  margin: 0 auto;
}

.modal.fade.show {
  backdrop-filter: blur(3px);
}

.modal-content {
  border: 1px solid #dde2e4;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
}

.modal-backdrop {
  opacity: 0 !important;
}
</style>
