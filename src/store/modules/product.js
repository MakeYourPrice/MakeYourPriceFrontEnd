import axios from 'config/axiosConfig';

const state = {
  brands: [],
  categories: [],
};

const getters = {
  brands(state) {
    return state.brands;
  },

  categories(state) {
    return state.categories;
  },
};

const actions = {
  loadProductInfo({ dispatch }) {
    return Promise.all([dispatch('loadBrands'), dispatch('loadCategories')]);
  },
  loadBrands({ commit }) {
    return axios.get('product-brand').then((response) => {
      commit('setBrands', response.data);
    });
  },
  loadCategories({ commit }) {
    return axios.get('product-category').then((response) => {
      commit('setCategories', response.data);
    });
  },
};

const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
  setBrands(state, brands) {
    state.brands = brands;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
