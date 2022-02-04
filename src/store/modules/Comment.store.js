import { api } from "boot/axios";

const state = {

};

const mutations = {

};

const actions = {

    store({ commit }, payload){
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/addcomment`, payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    like({ commit }, commentId){
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/comment/${commentId}/like`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    dislike({ commit }, commentId){
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/comment/${commentId}/dislike`).then(res => {
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