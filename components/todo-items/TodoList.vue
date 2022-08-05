<template>
  <div class="todo-list-item-container [ d-flex gap-4 ]">
    <div class="todo-list-checkbox">
      <input type="checkbox" name="todo-list-input" id="list-1" />
      <label for="list-1"></label>
    </div>
    <div class="todo-list-content">
      <h5 class="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, molestiae.</h5>
      <small class="time_n_date d-flex gap-3 opacity-75">
        <span class="d-inline-flex gap-2 align-items-center"><i class="fa-regular fa-clock"></i> 10.20 AM</span>
        <span class="opacity-50 fw-light">|</span>
        <span class="d-inline-flex gap-2 align-items-center"><i class="fa-regular fa-calendar"></i> 10.20 AM</span>
      </small>
    </div>    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>