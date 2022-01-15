import { api } from "boot/axios";

const state = {

};

const mutations = {

};

const actions = {
    store({ commit }, packageData){
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/service`, packageData).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    index({ commit }, categoryId){
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/services/${categoryId}`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
};

const getters ={};

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}