import { api } from 'boot/axios';

const state = {

};

const  mutations = {

};

const actions = {

    index({ commit }){
        return new Promise((resolve, reject) =>{
            api.get(`/api/slave/modules`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    show({ commit }, moduleId){
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/modules/${moduleId}`).then(res => {
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