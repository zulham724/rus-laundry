import { api } from "boot/axios";

const state = {};

const mutations = {};

const actions = {
  index({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/shops/${shopId}/servicecategories`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  // menyimpan service category berdasarkan shopId nya melalui role master
  store({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/master/shops/${payload.shop_id}/servicecategories`, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
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
