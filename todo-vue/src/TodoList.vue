<template>
  <div class="list-wrapper">
    <h2>Your list:</h2>
    <ul class="list">
      <li v-for="(item, index) in items" :key="`${item.label}-${index}`">
        <input :id="`item-${index}`" type="checkbox" @change="handleDone(index)" />
        <label
          :for="`item-${index}`"
          :class="{ crossed: item.done }"
        >
          {{ item.label }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    items: Array,
    handleDone: Function
  },
  data: () => ({
    item: ""
  }),
}
</script>

<style>
  .list {
    display: flex;
    flex-direction: column;
    max-height: 15rem;
    overflow: scroll;
  }

  .list li {
    margin-bottom: .5rem;
  }

  .crossed {
    text-decoration: line-through;
  }

  .list-wrapper {
    margin-top: 4rem;
  }
</style>
