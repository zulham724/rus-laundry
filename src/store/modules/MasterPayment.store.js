import { api } from "boot/axios";

const state = {
  checkPaymentHistory: null,
};

const mutations = {
  set_payment_history(state, payload) {
    state.checkPaymentHistory = null;
    state.checkPaymentHistory = payload;
  },
};

const actions = {
  store({ commit }, formData) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/master/packages/payment`, formData)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getHistory({ commit }) {
    return new Promise((resolve, reject) => {
      api.get(`/api/master/master_payment`).then((res) => {
        resolve(res);
      });
    });
  },

  confirmPaymentPackage({ commit }, paymentId) {
    console.log("wehee", paymentId);
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/master_payment/${paymentId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

const getters = {
  getPaymentHistory: (state) => state.checkPaymentHistory,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
