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
  //get revenue
  getMonthlyRevenue({ commit }, branchid) {
    return new Promise((resolve, reject) => {
      api
        .get(`api/master/branchpaymentcountbymonth/${branchid}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //get data orders
  getMonthlyOrders({ commit }, branchid) {
    return new Promise((resolve, reject) => {
      api
        .get(`api/master/ordercountbranchbymonth/${branchid}`)
        .then((res) => {
          // console.log('ressi', res)
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //new customer
  createBranchCustomer({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .post("api/master/branch_customer", payload)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    // return new Promise((resolve, reject) => {
    //     api
    //         .post("api/master/branch_customer", payload)
    //         .then((res) => {
    //             console.log("createBranchCustomer THEN")
    //             resolve(res.data);
    //         })
    //         .catch((err) => {
    //             console.log("createBranchCustomer CATCH")
    //             reject(err.response.data);
    //         });
    // });
  },
  //delete customer
  deleteBranchCustomer({ commit }, id) {
    let access = {
      _method: "delete",
    };
    return new Promise((resolve, reject) => {
      api
        .post(`/api/master/branch_customer/${id}`, access)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //get customer by id
  getCustomerById({ commit }, id) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/branch_customer/${id}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getServiceUnits({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .get("/api/master/get_service_units")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  updateCustomer({ commit }, customer) {
    let access = {
      _method: "PUT",
      ...customer,
    };
    return new Promise((resolve, reject) => {
      api
        .post(`/api/master/branch_customer/${customer.id}`, access)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  updateItem({ commit }, payload) {
    // console.log("state", payload);
    return new Promise((resolve, reject) => {
      api
        .post(`/api/master/servicecategories/${payload.id}/update`, payload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //new employee
  createBranchEmployee({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .post("/api/master/branch_employee", payload)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  deleteBranchItem({ commit }, id) {
    return new Promise((resolve, reject) => {
      api
        .get(`api/master/servicecategories/${id}/destroy`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //update employee
  updateEmployee({ commit }, { id, formData }) {
    formData.append("_method", "PUT");
    // console.log(access, formData);
    return new Promise((resolve, reject) => {
      api
        .post(`/api/master/branch_employee/${id}`, formData)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //delete employee
  deleteBranchEmployee({ commit }, id) {
    let access = {
      _method: "delete",
      // ...service,
    };
    return new Promise((resolve, reject) => {
      api
        .post(`/api/master/branch_employee/${id}`, access)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //get employee by id
  getEmployeeById({ commit }, id) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/branch_employee/${id}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //new service
  createBranchServices({ commit }, service) {
    return new Promise((resolve, reject) => {
      api
        .post("/api/master/branch_service", service)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //update service
  updateService({ commit }, service) {
    let access = {
      _method: "PUT",
      ...service,
    };
    return new Promise((resolve, reject) => {
      api
        .post(`/api/master/branch_service/${service.id}`, access)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //delete service
  deleteBranchServices({ commit }, id) {
    let access = {
      _method: "delete",
      // ...service,
    };
    return new Promise((resolve, reject) => {
      api
        .post(`/api/master/branch_service/${id}`, access)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  //get service by id
  getServiceById({ commit }, service) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/branch_service/${service}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  //get service catogeory
  getServiceCategory({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .get("/api/master/branch_service_category")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getBranchOrders({ commit }, shopid) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/master/shop/${shopid}/orderscount`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getBranchDevelopment({ commit }, shopid) {
    return new Promise((resolve, reject) => {
      api
        .get(`api/master/shop/${shopid}/getcurrentprofit`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getBranchProfit({ commit }, shopid) {
    return new Promise((resolve, reject) => {
      api
        .get(`api/master/shop/${shopid}/gettotalprice`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getBranchServices({ commit }, id) {
    return new Promise((resolve, reject) => {
      api
        .get(`api/master/slave/${id}/services`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getBranchEmployee({ commit }, shopid) {
    return new Promise((resolve, reject) => {
      api
        .get(`api/master/shop/${shopid}/employee`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getBranchCustomers({ commit }, shopid) {
    return new Promise((resolve, reject) => {
      api
        .get(`api/master/shop/${shopid}/customers`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getBranchItems({ commit }, shopid) {
    return new Promise((resolve, reject) => {
      api
        .get(`api/master/slave/${shopid}/servicecategories`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getItemById({ commit }, id) {
    return new Promise((resolve, reject) => {
      api
        .get(`api/master/servicecategories/${id}/byid`)
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
