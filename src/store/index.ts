import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedCard1: null,
    selectedCard2: null,
  },
  getters: {
    getSelectedCard1: state => state.selectedCard1,
    getSelectedCard2: state => state.selectedCard2,
  },
  mutations: {
    setSelectedCard1(state, payload) {
      state.selectedCard1 = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
