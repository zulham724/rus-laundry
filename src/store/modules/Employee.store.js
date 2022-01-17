import { api } from "boot/axios";

const state = {

};

const mutations = {

};

const actions = {
    getEmployeesByShop({ commit }, shopId) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/shop/${shopId}/employees`).then(res => {
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