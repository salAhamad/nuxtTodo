<template>
  <div>
    <TodoListContainer />
  </div>
</template>

<script>
  import TodoListContainer from '../components/todo-items/TodoListContainer.vue';
  export default {
    name: "IndexPage",
    components: { TodoListContainer }
  }
</script>

