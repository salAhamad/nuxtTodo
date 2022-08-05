export const state = () => ({
  popupToggle: false,
  todoLists: [
    {
      task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, accusamus!',
      date: '2017-12-12',
      time: '21:30',
    }
  ],
});

export const mutations = () => ({
  POPUP_TOGGLE(state, payload) {
    state.popupToggle = payload;
  }
})
