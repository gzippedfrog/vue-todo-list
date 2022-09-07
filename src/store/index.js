import moment from "moment";
import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import {
  ADD_TODO,
  TOGGLE_TODO,
  UPDATE_SEARCH_QUERY,
  UPDATE_SORT_BY,
} from "./mutation-types";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    sortBy: "timestamp",
    searchQuery: "",
  },
  getters: {
    sortedTodos: (state) => {
      const todos = [...state.todos];
      const sorted = todos.sort((a, b) =>
        a[state.sortBy] < b[state.sortBy] ? 1 : -1
      );

      const query = state.searchQuery.trim().toLowerCase();

      if (query) {
        return sorted.filter((todo) => {
          const description = todo.description;
          const date = moment(todo.timestamp).format("DD.MM.YY");
          const status = todo.completed ? "выполнено" : "в работе";

          return (
            description.includes(query) ||
            date.includes(query) ||
            status.includes(query)
          );
        });
      }
      return sorted;
    },
  },
  mutations: {
    [ADD_TODO](state, todo) {
      state.todos.push(todo);
    },
    [TOGGLE_TODO](state, timestamp) {
      const todo = state.todos.find((todo) => todo.timestamp === timestamp);
      todo.completed = !todo.completed;
    },
    [UPDATE_SEARCH_QUERY](state, query) {
      state.searchQuery = query;
    },
    [UPDATE_SORT_BY](state, sortBy) {
      state.sortBy = sortBy;
    },
  },
  plugins: [vuexLocal.plugin],
});
