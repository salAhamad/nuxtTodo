<template>
  <div class="content-body">
    <div class="todo-list-container">
      <div class="__header [ d-flex justify-content-between ]">
        <div class="date">
          <h2 class="text-primary">
            <span class="fw-bolder">{{today}}</span>,
            <span class="fw-light">{{date.length === 1 ? `0${date}` : date }}<sup>th</sup></span>
          </h2>
          <h6 class="fw-light">{{month}}, {{year}}</h6>
        </div>
        <p>10 Tasks</p>
        <button class="add-new-btn" @click.prevent="addNewPopup">
          <i class="fa-solid fa-plus"></i>
          <span>Add New</span>
        </button>
      </div>
      <div class="todo-list-wrapper">
        <TodoList />
        <TodoList />
        <TodoList />
      </div>
    </div>
    <AddNewList ref="child" v-if="popupToggle" @closeModal="popupToggle = $event" />
  </div>
</template>

<script>
import moment from 'moment'
import TodoList from './TodoList.vue'
import AddNewList from './AddNewList.vue'
export default {
  name: "todo-list-container",
  data() {
    return {
      today: moment().format("dddd"),
      date: moment().format("D"),
      month: moment().format("MMMM"),
      year: moment().format("yyyy"),
      
      popupToggle: false,
    };
  },
  methods: {
    addNewPopup() { return this.popupToggle = !this.popupToggle; },
  },
  components: { TodoList, AddNewList }
}
</script>

<style lang="scss">
  
  .todo-list-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    border-radius: .5rem;
    background-color: var(--bs-gray-800);
    // border: 1px solid var(--bs-gray-700);
    margin-inline: auto;
    backdrop-filter: blur(5px);

    .__header {
      position: relative;
      width: 100%;
      padding: 1.75rem 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(var(--primary-rgb), 1);
      background-color: rgba(var(--bs-light-rgb), .075);
      border-radius: .5rem .5rem 0 0;
      z-index: 1;
    } 
    .add-new-btn {
      // min-width: var(--buttonSize);
      height: var(--buttonSize);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primary);
      outline: none;
      border: 0;
      border-radius: calc(var(--buttonSize) / 2);
      position: absolute;
      right: 1.5rem;
      bottom: calc(0px - calc(var(--buttonSize) / 2));
      transition: var(--transition);
      box-shadow: 0 10px 20px rgba(var(--primary-rgb), .1), 0 5px 10px rgba(var(--primary-rgb), .2);
      i {
        width: var(--buttonSize);
        height: var(--buttonSize);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.45rem;
      }
      span {
        width: 0;
        overflow: hidden;
        white-space: nowrap;
        transition: var(--transition);
        text-align: left;
      }
      &:hover {
        // transform: scale(1.3);
        // padding-right: 1rem;
        background-color: var(--bs-light);
        color: var(--bs-dark);
        box-shadow: 0 10px 20px rgba(var(--dark-rgb), .1), 0 5px 10px rgba(var(--dark-rgb), .2);
        span { width: 85px; }
      }
    }
    .todo-list-wrapper {
      $verticalGap: 1rem;
      position: relative;
      width: 100%;
      padding: 2rem 1rem 1rem;
      display: flex;
      flex-direction: column;
      gap: $verticalGap;
      border-radius: 0 0 .5rem .5rem;

      $radioSize: 28px;
      .todo-list-item-container {
        position: relative;
        padding: 1rem 1.25rem;
        border-radius: .3rem;
        transition: var(--transition);
        &:not(:last-child):after {
          content: "";
          position: absolute;
          left: 20px;
          bottom: calc(0px - #{$verticalGap} / 2);
          width: calc(100% - 40px);
          height: 1px;
          background-color: rgba(var(--bs-dark-rgb), .5)
        }

        .todo-list-checkbox {
          position: relative;
          margin-top: .25rem;
          input { display: none; }
          label {
            transition: var(--transition);
            cursor: pointer;
            transform-origin: center;
            margin-bottom: 0;
            width: $radioSize;
            height: $radioSize;
            border-radius: .3rem;
            transition: var(--transition);
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: inset 0 0 0 1px var(--bs-dark);
            position: relative;
            
            &::after {
              content: "\f00c";
              width: calc(#{$radioSize} - 6px);
              height: calc(#{$radioSize} - 6px);
              transform: scale(1);
              font-family: "Font Awesome 5 Free";
              font-weight: 900;
              transition: var(--transition);
              background-color: var(--bs-dark);
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: .2rem;
              font-size: 0%;
            }
          }
          input:checked ~ label {
            box-shadow: inset 0 0 0 1px rgba(var(--primary-rgb), 1);
            &::after { 
              background-color: var(--primary);
              font-size: 100%;
            }
          }
        }
        &:hover {
          background-color: rgba(var(--bs-dark-rgb), 1);
          color: var(--bs-light);
          h5 { color: var(--primary); }
          label {
            transform: scale(1.2);
            box-shadow: inset 0 0 0 1px var(--primary);
            &::after {background-color: var(--primary);}
          }
        }
        .time_n_date {
          i { font-size: 85%; }
        }
      }
    }
  }
</style>