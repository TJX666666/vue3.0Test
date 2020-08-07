import Vuex from "vuex";

export default Vuex.createStore({
  state: {
    test: {
      a: 15
    }
  },
  mutations: {
    setTestA(state, value) {
      state.test.a = value;
    }
  },
  actions: {},
  modules: {}
});
