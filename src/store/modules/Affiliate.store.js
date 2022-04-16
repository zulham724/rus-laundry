import { api } from "boot/axios";

const state = {};

const mutations = {};

const actions = {
    getAffiliateList({ commit }, id) {
        return new Promise((resolve, reject) => {
            api
                .get(`api/master/affiliate/${id}`)
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