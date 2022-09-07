<template>
  <div id="app">
    <div>
      <h3>To do list</h3>
      <PlusButton />
    </div>

    <TodoList />

    <AddTodoModal />
  </div>
</template>

<script>
import PlusButton from "./components/PlusButton.vue";
import TodoList from "./components/TodoList.vue";
import AddTodoModal from "./components/AddTodoModal.vue";

export default {
  name: "App",
  components: { PlusButton, TodoList, AddTodoModal },
  data() {
    return {};
  },

  methods: {
    showModal() {
      this.$refs["add-todo-modal"].show();
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #16191d;
  padding: 20px 20px 0;
  max-width: 1300px;
  margin: 0 auto;

  div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    h3 {
      margin: 0;
    }
  }
}
</style>
