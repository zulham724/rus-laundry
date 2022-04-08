import { api } from "boot/axios";

const state = {
    data: {},
    order: null,
};

const mutations = {};

const actions = {
    getOrderCountByMonthSearchBranches({ commit }, masterId) {
        api.get(`/api/slave/ordercountbymonthseachbranches/${masterId}`)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })

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