import { api } from "boot/axios";

const state = {};

const mutations = {};

const actions = {
    getTotalSum({ commit }, shopid) {
        return new Promise((resolve, reject) => {
            api
                .get(`api/master/payment/get-total-sum/${shopid}`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    getIncome({ commit }, shopid) {
        return new Promise((resolve, reject) => {
            api
                .get(`api/master/payment/get-income/${shopid}`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    getSpend({ commit }, shopid) {
        return new Promise((resolve, reject) => {
            api
                .get(`api/master/payment/get-spending/${shopid}`)
                .then((response) => {
                    resolve(response);
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