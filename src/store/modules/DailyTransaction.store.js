import { api } from "boot/axios";

const state = {
  data: [],
  order: null,
};

const mutations = {
  set_day(state, payload) {
    state.data = payload.data;
  },
  next(state, payload) {
    state.data = {
      ...payload.data,
      data: [...state.data.data, ...payload.data.data],
    };
  },
};

const actions = {
  getOrdersShopByDay({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getpaymenttoday/${shopId}`)
        .then((res) => {
          const data = res.data;
          commit("set_day", {
            data: data,
          });
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  next({ commit, state }) {
    return new Promise((resolve, reject) => {
      api
        .get(`${state.data.next_page_url}`)
        .then((res) => {
          commit("next", {
            data: res.data,
          });
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
