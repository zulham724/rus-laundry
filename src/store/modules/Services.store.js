import { api } from "boot/axios";

const state = {

};

const mutations = {

};

const actions = {
    store({ commit }, packageData) {
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/service`, packageData).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    index({ commit }) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/services`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    destroy({ commit }, packages) {
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/deleteservices`, packages).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    getServicesByCategory({ commit }, categoryId) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/getservices/${categoryId}`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    updateStatus({ commit }, orderService) {
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/updateStatusService`, orderService).then(res => {
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