import {
  api
} from "boot/axios";


const state = {
  list_history: [],

};

const mutations = {
  add_history(state, payload) {
    state.list_history.push(payload)
  }

};

const actions = {

};

const getters = {
  list_history: (state) => state.list_history,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
