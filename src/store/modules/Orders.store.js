import { api } from "boot/axios";

const state = {
  data: {},
  order: null,
};

const mutations = {
  set_orders(state, payload) {
    state.data = payload.data;
  },
  set_order(state, payload) {
    payload.order.charts = [];
    state.order = payload.order;
  },
  delete_order(state) {
    state.order = null;
  },

  add_order_cart(state, payload) {
    payload.data.package = null;
    state.order.charts.push(payload.data);
  },
  add_paket_in_chart(state, payload) {
    state.order.charts.forEach((item) => {
      if (item.id == payload.id) {
        item.package = payload.paket;
      }
    });
  },
  add_pre_order_photo(state, payload) {
    let index = state.order.charts.findIndex(
      (item) => item.id == payload.service_id
    );
    console.log(state.order, payload);
    if (index > -1) {
      state.order.charts[index].pre_order_photo = payload.photo;
      console.log("foto dimasukan ke ", state.order);
    } else {
      console.log("ga nemu");
    }
  },
  remove_order_chart(state, payload) {
    var index = state.order.charts.findIndex((item) => item.id == payload.id);
    if (index > -1) {
      state.order.charts.splice(index, 1);
    }
  },

  destroy_order(state, payload) {
    var index = state.data.findIndex((item) => item.id == payload.id);
    if (index !== -1) {
      state.data.splice(index, 1);
    }
  },
  next(state, payload) {
    state.data = {
      ...payload.data,
      data: [...state.data.data, ...payload.data.data],
    };
  },
  reset(state) {
    state.order = null;
    state.data = {};
  },
  clear() {
    state.order = null;
    state.data = null;
  },
};

const actions = {
  // savePreOrderPhoto({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     api.post("api/slave/preorderphott")
  //   });
  // },
  savePhoto({ commit }, { formData, opt }) {
    console.log("opt", opt);
    console.log("formData", formData);
    return new Promise((resolve, reject) => {
      api
        .post("/api/slave/postorderphoto", formData, {
          onUploadProgress: (progressEvent) => {
            let uploadProgres =
              (progressEvent.loaded / progressEvent.total) * 100;
            console.log(uploadProgres);
            opt.onUploadProgress(uploadProgres);
            // console.log(send)
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  storePayment({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let access = {
        value: payload.value,
      };
      api
        .post(`/api/slave/user/order/${payload.order_id}/payment`, access)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  reset({ commit }) {
    return new Promise((resolve, reject) => {
      commit("reset");
    });
  },
  updateStatus({ commit }, orderStatus) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/slave/updateOrderStatus`, orderStatus)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  dailyTransactionCounter({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/dailyTransactionCounter/${shopId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getOrdersByShop({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/shop/${shopId}/getOrdersByShop`)
        .then((res) => {
          const data = res.data;
          commit("set_orders", {
            data: data,
          });
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getOrdersReportByShop({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/shop/${shopId}/getOrdersReportByShop`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  index({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/order`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  store({ commit }, formData) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/slave/order`, formData)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  ownerOrderProduct({ commit }, formData) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/master/orderproduct`, formData)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  orderProduct({ commit }, formData) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/slave/orderproduct`, formData)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  filterOrdersIn({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/filterOrdersIn/${payload.from}/${payload.to}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  filterOrdersOut({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/filterOrdersOut/${payload.from}/${payload.to}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getOrderStatus({ commit }, state) {
    return new Promise((resolve, reject) => {
      api
        .get("/api/slave/orderstatus")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getOrderByStatus({ commit }, id) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getorderbystatus/${id}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getOrderPaymentStatus({ commit }, id) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getorderbypaymentstatus/${id}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  show({ commit }, orderId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/order/${orderId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  show2({ commit }, payload) {
    console.log(payload, "cek payload");
    return new Promise((resolve, reject) => {
      api
        .get(`/api/order/${payload.shopId}/${payload.orderId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  update({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const acces = {
        _method: "update",
        ...payload,
      };
      api
        .put(`/api/slave/order/${payload.orderid}`, acces)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  delete({ commit }, orderId) {
    return new Promise((resolve, reject) => {
      const acces = {
        _method: "delete",
      };
      api
        .post(`/api/slave/order/${orderId}`, acces)
        .then((res) => {
          commit("destroy_order", {
            id: orderId,
          });
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  filterReport({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/slave/shop/order/report`, payload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getStatus({ commit }, dataOrder) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/slave/getOrderServiceStatus`, dataOrder)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  searchOrders({ commit }, value) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/slave/searchOrders`, value)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getOrder({ commit }, orderid) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getorder/${orderid}`)
        .then((res) => {
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
  countProfitOrdersByDay({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getCountProfitOrdersByDay/${shopId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  countSpendOrdersByDay({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getCountSpendOrdresByDay/${shopId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  countProfitOrdersByWeek({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getCountProfitOrdersByWeek/${shopId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  countSpendOrdersByWeek({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getCountSpendOrdresByWeek/${shopId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  countProfitOrdersByMonth({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getCountProfitOrdersByMonth/${shopId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  countSpendOrdersByMonth({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getCountSpendOrdresByMonth/${shopId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getBalanceToday({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getBalanceToday/${shopId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getBalanceWeekly({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getBalanceWeekly/${shopId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getBalanceMonthly({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/getBalanceMonthly/${shopId}`)
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
