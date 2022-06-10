import { api } from "boot/axios";

const state = {};

const mutations = {};

const actions = {
  getRekeningById({ commit }, payload) {
    console.log("cek payload", payload);
    return new Promise((resolve, reject) => {
      api
        .get(
          `/api/master/shops/${payload.shopId}/payment_vendors/${payload.id}`
        )
        .then((res) => {
          // console.log("cekkkk", res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getAccountBank({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/shops/${shopId}/payment_vendors`)
        .then((res) => {
          // console.log("cekkkk", res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  addAccountBank({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const access = {
        _method: "POST",
        ...payload.formData,
      };
      api
        .post(`/api/master/shops/${payload.shopId}/payment_vendors`, access)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  deleteAccountBank({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const access = {
        _method: "DELETE",
      };
      api
        .post(
          `api/master/shops/${payload.shopId}/payment_vendors/${payload.id}`,
          access
        )
        .then((res) => {
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
