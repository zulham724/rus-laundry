import { api } from "boot/axios";

const state = {
    report: {},
};

const mutations = {
    setReportPost(state, payload) {
        state.report = payload;
    },
};

const actions = {};

const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};