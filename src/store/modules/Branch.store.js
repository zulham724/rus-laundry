import { api } from "boot/axios";

const state = {};

const mutations = {};

const actions = {
    addNewBranch({ commit }, payload) {
        return new Promise((resolve, reject) => {
            const access = {
                _method: "POST",
                ...payload,
            };
            api
                .post(`api/master/branch/`, access)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    deleteBranch({ commit }, payload) {
        return new Promise((resolve, reject) => {
            api
                .post(`api/master/branch/delete-branch`, payload)
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