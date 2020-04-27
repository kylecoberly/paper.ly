export default {
  state: {
    rollsRemaining: 2,
    rollRate: 1
  },
  getters: {
    daysRemaining(state) {
      return Math.floor(state.rollsRemaining / state.rollRate);
    }
  },
  mutations: {},
  actions: {},
  modules: {}
};
