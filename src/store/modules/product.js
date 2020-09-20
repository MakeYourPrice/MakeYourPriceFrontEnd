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
    return axios.get('Product/get/brands').then((response) => {
      commit('setBrands', response.data);
    });
  },
  loadCategories({ commit }) {
    return axios.get('Product/get/categories').then((response) => {
      commit('setCategories', response.data);
    });
  },
};

const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
  setBrands(state, brands) {
    state.categories = brands;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
