import { api } from "boot/axios";

const state = {

};

const mutations = {

};

const actions = {
    getCustomersByShop({ commit }, shopId) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/shop/${shopId}/customers`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }

};

const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}