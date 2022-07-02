import { api } from "boot/axios";

const state = {
  data: {},
  order: null,
  // chartData: null,
};

const mutations = {
  // add_chart_data(state, payload) {
  //     state.chartData.push(payload.data);
  //     console.log('isi payload', payload)
  // },
};

const actions = {
  // get data jumlah seluruh pesanan
  getDataPerkembangan({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/growth`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getTotalItem({ commit }, shopid) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/slave/${shopid}/servicecategories`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getPackages({}) {
    return new Promise((resolve, reject) => {
      api
        .get("/api/master/packages")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log("a");
          reject(err);
        });
    });
  },
  getProfit({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/profit`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getTotalOrders({ commit }, masterId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/totalorders`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getTotalOrdersPerShop({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .get("/api/master/branches")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // get data
  getMonthlyOrder({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/ordercountbymonths`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getMonthlyOrderEachBranch({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/paymentcountbymonthseachbranches`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getMonthlyRevenue({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .get("/api/master/paymentcountbymonths")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getMonthlyOrdersEachBranches({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/branches`)
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
  // chartData: (state) => state.chartData,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
