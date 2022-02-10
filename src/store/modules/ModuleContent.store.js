import { api } from 'boot/axios';

const state = {
    contents: []
};

const mutations = {

    set_contents(state, payload) {
        state.contents = payload.data
    },
    

};

const actions = {

    show({ commit }, contentId) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/module-contents/${contentId}`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    like({ commit }, contentId) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/modulecontent/${contentId}/like`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    dislike({ commit }, contentId) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/modulecontent/${contentId}/dislike`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
};

const getters = {
    nextContent:(state)=>(id)=>{
        let index = state.contents.findIndex((item) => item == id)
        return state.contents[index+1]
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}