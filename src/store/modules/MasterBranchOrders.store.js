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