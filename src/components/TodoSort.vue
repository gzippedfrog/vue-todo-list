<template>
  <div>
    Сортировать по:

    <select name="sortOrder" :value="sortBy" @input="updateSortBy">
      <option value="timestamp">Дата</option>
      <option value="completed">Статус</option>
    </select>
  </div>
</template>

<script>
import { UPDATE_SORT_BY } from "@/store/mutation-types";

export default {
  name: "TodoSort",
  computed: {
    sortBy() {
      return this.$store.state.sortBy;
    },
  },
  methods: {
    updateSortBy(e) {
      this.$store.commit(UPDATE_SORT_BY, e.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
select {
  border: none;
  background-color: rgba($color: #fff, $alpha: 0);
}
</style>
