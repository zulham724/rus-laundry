import { api } from "boot/axios";

const state = {};

const mutations = {};

const actions = {
    getBranches({ commit }) {
        return new Promise((resolve, reject) => {
            api
                .get("/api/master/branches")
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    addNewBranch({ commit }, payload) {
        return new Promise((resolve, reject) => {
            const access = {
                _method: "POST",
                ...payload,
            };
            api
                .post(`api/master/branch/`, access)
                .then((res) => {
                    console.log('THEN')
                    resolve(res.data);
                })
                .catch((err) => {
                    console.log('CATCH')
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
    getProfit({ commit }, branchid) {
        return new Promise((resolve, reject) => {
            api
                .get(`api/master/ordercountbranchbymonth/${branchid}`)
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