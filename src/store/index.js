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
  mutations: {
    incrementRollsRemaining(state) {
      state.rollsRemaining += 1;
    },
    decrementRollsRemaining(state) {
      state.rollsRemaining =
        state.rollsRemaining > 0 ? state.rollsRemaining - 1 : 0;
    }
  },
  actions: {
    incrementRollsRemaining({ commit }) {
      commit("incrementRollsRemaining");
    },
    decrementRollsRemaining({ commit }) {
      commit("decrementRollsRemaining");
    }
  },
  modules: {}
};
