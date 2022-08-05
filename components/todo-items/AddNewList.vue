<template>
  <div class="popup-section-container">
    <div class="add-new-todo-list-container">
      <div class="__header [ d-flex justify-content-between align-items-center ]">
        <h4 class="m-0 text-primary fw-bolder">Add New</h4>
        <span class="closeButton" @click.prevent="addNewPopup">×</span>
      </div>
      <div class="__body">
        <form>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Task Details</label>
            <textarea 
              class="form-control border-0" 
              :class="{'is-invalid': contnetError }"
              @blur="formValidate"
              rows="3" 
              v-model="content"
              placeholder="Enter your t@ask details here..."
              ></textarea>
              <small v-if="contnetError" class="text-danger">This field cannot be empty.</small> 
          </div>
          <div class="d-flex row">
            <div class="mb-3 col-6">
              <label for="" class="form-label">Date</label>
              <input 
                type="date" 
                v-model="date" 
                @blur="formValidate"
                class="form-control border-0" 
                :class="{'is-invalid': dateError }"
                placeholder="name@example.com" />
            </div>
            <div class="mb-3 col-6">
              <label for="" class="form-label">Time</label>
              <input 
                type="time" 
                v-model="time" 
                @blur="formValidate"
                class="form-control border-0" 
                :class="{'is-invalid': timeError }"
                placeholder="name@example.com" />
            </div>
          </div>
          <button 
            class="btn btn-primary fw-semibold w-100 mt-2" 
            @click.prevent="addNewList" 
            @keypress.enter="addNewList"
            >Add New</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addNewList',
  data() {
    return {
      content: '',
      date: '',
      time: '',
      contnetError: false,
      dateError: false,
      timeError: false,
    }
  },
  props: [ 'addNewPopup' ],
  
  methods: {
    formValidate() {
      if(this.content.length <= 0) {
        this.contnetError = true
        return true;
      }

      if(this.content.length <= 0) {
        this.dateError = true
        return true;
      } 

      if(this.content.length <= 0) {
        this.timeError = true
        return true;
      }

      this.timeError = false
      return false;
    },

    addNewList() {
      this.formValidate()
      console.log(this.content, this.date, this.time)
    },
  }
}
</script>

<style lang="scss">
  .popup-section-container {
    position: fixed;
    inset: 0;
    width: 100%;  
    height: 100%;
    background-color: rgba(var(--bs-dark-rgb), .75);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    .add-new-todo-list-container {
      position: relative;
      border-radius: .4rem;
      background-color: var(--bs-dark);
      max-width: 400px;
      min-width: 400px;
      box-shadow: 
        0 10px 15px rgba(var(--primary-rgb), .15),
        0 15px 30px rgba(var(--primary-rgb), .1),
        0 30px 60px rgba(var(--primary-rgb), .05);

      .__header {
        width: 100%;
        border-bottom: 1px solid var(--bs-gray-800);
        padding: 1.25rem 1.5rem;
        .closeButton {
          width: 30px;
          height: 30px;
          line-height: 24px;
          font-size: 1.6rem;
          text-align: center;
          border-radius: .25rem;
          cursor: pointer;
          display: inline-block;
          transition: var(--transition);
          &:hover {
            transform: scale(1.15);
            background-color: var(--primary);
            color: var(--bs-light);
          }
        }
      }
      .__body {
        width: 100%;
        padding: 1rem 1.5rem 1.5rem;
      }
    }
    .form-control {
      background-color: var(--bs-gray-700);
      transition: var(--transition);
      color: var(--bs-light);
      &:focus { color: var(--bs-light) }
      &::placeholder { color: var(--bs-gray-500); }
      &.is-invalid {
        box-shadow: 0 0 0 0.35rem rgba(var(--bs-danger-rgb), .15), 0 0 0 0.05rem rgba(var(--bs-danger-rgb), 1);
      }
      &:focus {
        background-color: var(--primary) !important;
        box-shadow: 0 0 0 0.35rem rgba(var(--primary-rgb), .15);
        color: var(--bs-dark);
        &::placeholder {
          color: var(--bs-dark);
        }
      }
    }
  }
</style>