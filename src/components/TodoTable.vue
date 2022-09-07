<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="col-xsmall"></th>
          <th>Описание</th>
          <th class="col-small">Статус</th>
          <th class="col-small">Дата</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="todo in todos"
          @click="toggleTodo(todo)"
          :key="todo.timestamp"
        >
          <td :class="['circle', todo.completed ? 'circle-ticked' : '']"></td>
          <td>{{ todo.description }}</td>
          <td :class="todo.completed ? 'completed' : 'inprogress'"></td>
          <td>{{ formatDate(todo.timestamp) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { TOGGLE_TODO } from "@/store/mutation-types";
import moment from "moment";

export default {
  name: "TodoList",
  computed: {
    todos() {
      return this.$store.getters.sortedTodos;
    },
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD.MM.YY");
    },
    toggleTodo(todo) {
      this.$store.commit(TOGGLE_TODO, todo.timestamp);
    },
  },
};
</script>

<style lang="scss" scoped>
$blue: #134ec1;

table {
  width: 100%;

  th,
  td {
    padding: 0 20px;
  }

  th {
    font-weight: normal;
    text-align: left;
    position: relative;
    &:not(:first-of-type)::before {
      content: "";
      position: absolute;
      background-color: #c4c4c4;
      top: 25%;
      left: 0;
      width: 1px;
      height: 50%;
    }
  }

  tr {
    height: 58px;
    border-bottom: 1px solid #eeebe9 !important;
    border-collapse: collapse;
  }

  tbody {
    tr:hover {
      background-color: #f6f9ff;
      cursor: pointer;
    }
  }
}

.col-small {
  width: 100px;
  box-sizing: content-box;
}

.col-xsmall {
  width: 40px;
  box-sizing: content-box;
}

.circle {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    border: 1px solid #16191d;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
}

.circle-ticked {
  &::before {
    border: 1px solid $blue;
    color: $blue;
    position: absolute;
  }

  &::after {
    content: "✓";
    color: $blue;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.inprogress::before {
  content: "В работе";
  color: #f89b11;
}

.completed::before {
  content: "Выполнено";
  color: $blue;
}
</style>
