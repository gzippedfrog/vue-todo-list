<template>
  <b-modal
    centered
    headerClass="border-bottom-0 mx-3 mt-3"
    footerClass="border-top-0 mx-3 mb-3"
    id="add-todo-modal"
    ref="modal"
  >
    <template #modal-header>
      <h5>Создать новую задачу</h5>
      <button class="closeBtn" @click="hideModal"></button>
    </template>

    <div class="mx-3">
      <label for="newTodoDescription">Описание</label>
      <input
        type="text"
        id="newTodoDescription"
        placeholder="Введите описание"
        v-model="newTodoDescription"
      />
    </div>

    <template #modal-footer>
      <button class="addTodoBtn" @click="addTodo">Создать</button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "AddTodoModal",
  data() {
    return {
      newTodoDescription: "",
    };
  },
  methods: {
    hideModal() {
      this.$refs.modal.hide();
      this.newTodoDescription = "";
    },
    addTodo() {
      const description = this.newTodoDescription.trim();
      if (!description) return;

      this.$store.commit("addTodo", {
        description,
        timestamp: Date.now(),
        completed: false,
      });

      this.hideModal();
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  padding: 11px 16px;
  border: 1px solid #dde2e4;
  border-radius: 8px;
  display: block;
  width: 100%;
}

.closeBtn {
  height: 22px;
  width: 22px;
  color: #fff;
  background-color: #314b99;
  border: none;
  border-radius: 5px;
  position: relative;

  &::before {
    content: "⨉";
    position: absolute;
    font-size: 0.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.addTodoBtn {
  color: #314b99;
  background-color: #f0f5ff;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  padding: 12px 40px;
  margin: 0 auto;
}
</style>
