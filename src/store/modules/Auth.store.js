
import { api } from "src/boot/axios";

const state = {
    token: {},
    auth: null,
   
    
};

const mutations = {
    set_token(state, payload) {
    state.token = payload.token
    },
    logout(state, payload) {
        state.token = {}
    },
    set_auth(state, payload){
        state.auth = payload.auth
    },
    update_phone_number(state, payload){
        state.auth.contact_number = payload.contact_number
    }
};


const actions = {
    login({ commit }, credential) {
        const access = {
            grant_type: "password",
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            ...credential
        };
        return new Promise((resolve, reject) => {
            api.post(`/oauth/token`, access).then((res) => {
                const token = res.data;
                api.defaults.headers.common.Accept = "application/json";
                api.defaults.headers.common.Authorization = `${token.token_type} ${token.access_token}`;
                commit('set_token', {token:token})
                api.get(`api/slave/user`).then(resp => {
                    const auth = resp.data
                    commit('set_auth', {auth:auth})
                }).finally(()=>{
                    resolve(res.data)
                })
            }).catch(err => {
                reject(err)
            })
        })
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            commit("logout");
            delete api.defaults.headers.common.Authorization;
            resolve();
        })
    },
    addWANumber({ commit }, contact_number){
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/inputnumberphone`, contact_number).then(res => {
                commit('update_phone_number', {contact_number: contact_number});
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
};

const getters = {
    isLoggedIn: (state) => !!state.token.access_token,
    auth: (state) => state.auth,
    token: (state) => state.token
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};