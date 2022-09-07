import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    toggleTodo(state, timestamp) {
      const todo = state.todos.find((todo) => todo.timestamp === timestamp);
      todo.completed = !todo.completed;
    },
  },
  plugins: [vuexLocal.plugin],
});
