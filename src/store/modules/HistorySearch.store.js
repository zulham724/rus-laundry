import { api } from "boot/axios";

const state = {
    list_history: [],
};

const mutations = {
    add_history(state, payload) {
        let exist = state.list_history.findIndex((item) => item.id == payload.id);
        if (exist < 0) {
            state.list_history.push(payload);
        }
    },
    clear_all_history(state) {
        state.list_history = [];
    },
    clear_history(state, payload) {
        let index = state.list_history.findIndex((item) => item.id == payload);
        state.list_history.splice(index, 1);
    },
};

const actions = {
    getAllUser({ commit }, paylod) {
        return new Promise((resolve, reject) => {
            api
                .get(`/api/slave/user/get-all-user`)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
};

const getters = {
    list_history: (state) => state.list_history,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};