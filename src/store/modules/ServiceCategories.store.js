import { api } from 'boot/axios'

const state = {
    cart: []
};

const mutations = {

    add_cart_item(state, payload) {
        state.cart.push(payload)
    }
};

const actions = {
    index({ commit }) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/servicecategories`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    store({ commit }, formData) {
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/servicecategories`, formData).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    destroy({ commit }, categories) {

        return new Promise((resolve, reject) => {
            api.post(`/api/slave/deletecategories`, categories).then(res => {
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