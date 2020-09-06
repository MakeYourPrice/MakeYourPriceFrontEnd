const state = {
  menuVisible: false,
};

const getters = {
  menuVisible(state) {
    return state.menuVisible;
  },
};

const actions = {};

const mutations = {
  toggleMenuVisible(state) {
    state.menuVisible = !state.menuVisible;
  },
  setMenuVisible(state, bool) {
    state.menuVisible = bool;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
