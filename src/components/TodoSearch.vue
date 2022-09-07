<template>
  <div class="d-flex align-items-center">
    <MagnifyIcon />
    <input
      :value="searchQuery"
      @input="updateSearchQuery"
      placeholder="Поиск имени, статуса или даты"
    />
  </div>
</template>

<script>
import { UPDATE_SEARCH_QUERY } from "@/store/mutation-types";
import MagnifyIcon from "./MagnifyIcon.vue";

export default {
  name: "TodoSearch",
  computed: {
    searchQuery() {
      return this.$store.state.searchQuery;
    },
  },
  methods: {
    updateSearchQuery(e) {
      this.$store.commit(UPDATE_SEARCH_QUERY, e.target.value);
    },
  },
  components: { MagnifyIcon },
};
</script>

<style lang="scss" scoped>
input {
  width: 300px;
  margin-left: 10px;
  border: none;
  background-color: rgba($color: #fff, $alpha: 0);

  &::placeholder {
    color: #c4c4c4;
  }

  &:focus {
    outline: none;
  }
}
</style>
