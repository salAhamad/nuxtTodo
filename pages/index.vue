<template>
  <div>
    <TodoListContainer />
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  import TodoListContainer from '../components/todo-items/TodoListContainer.vue';
  export default {
    name: "IndexPage",
    components: { Header, TodoListContainer }
  }
</script>

