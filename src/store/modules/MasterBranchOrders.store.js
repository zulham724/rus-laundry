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
                .get(`api/master/branchpaymentcountbymonth/${branchid}`)
                .then((res) => {
                    console.log('ressi', res)
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
                    resolve(res);
                    console.log("createBranchCustomer RES")
                })
                .catch((err) => {
                    reject(err);
                    console.log("createBranchCustomer ERR")
                });
        });
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
    //new employee
    createBranchEmployee({ commit }, payload) {
        return new Promise((resolve, reject) => {
            api
                .post("/api/master/branch_employee", payload)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    //update employee
    updateEmployee({ commit }, employee) {
        let access = {
            _method: "PUT",
            ...employee,
        };
        return new Promise((resolve, reject) => {
            api
                .post(`/api/master/branch_employee/${employee.id}`, access)
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
                    resolve(res);
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