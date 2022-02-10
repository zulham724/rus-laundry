import { api } from 'boot/axios';

const state = {

};

const mutations = {

};

const actions = {

    store({ commit }, product) {
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/product`, product).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    index({ commit }) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/product`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    getProductByShop() {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/getproductbyshop`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    show({ commit }, productId) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/product/${productId}`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    getAnotherProducts({ commit }, shopId) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/${shopId}/getproducts`).then(res => {
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