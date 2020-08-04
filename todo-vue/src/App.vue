<template>
  <div id="app">
    <div class="wrapper">
      <div class="item-form">
        <div class="input-wrapper">
          <label for="item"> Enter your new item: </label>
          <input
            id="item"
            class="item-input"
            type="text"
            v-model="newItem"
            @keyup.enter="handleAdd"
          />
        </div>
        <button
          class="item-button"
          type="button"
          @click="handleAdd"
          :disabled="newItem.trim() === ''"
        >
          Add
        </button>
      </div>
      <TodoList :items="items" :handleDone="handleDone" />
    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList";

export default {
  components: { TodoList },
  data:() => ({
    items: [],
    newItem: ""
  }),
  methods: {
    handleAdd() {
      this.items.push({ label: this.newItem, done: false });
      this.newItem = "";
    },
    handleDone(index) {
      const items = [...this.items];
      items[index] = {...items[index], done: !items[index].done};
      this.items = items;
    }
  }
}
</script>
<style>
  body {
    background: #FFF;
    color: #2c3e50;
    font-family: "Helvetica";
    font-size: 15px;
    font-weight: 400;
    height: 100vh;
    line-height: 1.25;
    margin: 0;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    -webkit-text-size-adjust: 100%;
  }

  input {
    padding-left: 1rem;
  }

  label {
    margin-right: 1rem;
  }

  ul {
  list-style-type: none;
  }

  #app {
    height: 100%;
  }

  .wrapper {
    background-color: #d3f3e4;
    border: 1px solid #42b983;
    border-radius: 10px;
    height: 22rem;
    margin: 10% auto;
    padding: 5rem;
    width: 35rem;
  }

  .item-input {
    border: 0;
    border-radius: 5px;
    height: 1.7rem;
    width: 15rem;
  }

  .input-wrapper {
    margin-right: 1rem;
  }

  .item-form {
    align-items: center;
    display: flex;
  }

  .item-button {
    border-radius: 8px;
    border:1px solid #b9cfc5;
    box-shadow: none;
    height: 2rem;
    width: 4rem;
  }

  .item-input:focus {
    outline: none;
    box-shadow: none;
    border: 0;
  }
</style>
