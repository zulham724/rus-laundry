import { api } from "boot/axios";

const state = {};

const mutations = {};

const actions = {
    store({ commit }, formData) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/master/packages/payment`, formData)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
};

const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};