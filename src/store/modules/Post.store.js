import {
  api
} from 'boot/axios';


const state = {
  posts: {}
};

const mutations = {
  set(state, payload) {
    state.posts = payload.posts
  },
  setSize(state, payload) {
    const index = state.posts.data.findIndex(item => item.id == payload.id);
    if (index > -1) state.posts.data[index].size = payload.size
  },
  next(state, payload) {
    state.posts = {
      ...payload.posts,
      data: [...state.posts.data, ...payload.posts.data]
    }
  },
  liked(state, payload){
    const index = state.posts.data.findIndex(item => item.id == payload.post_id);
    console.log(index)
    if(index > -1){
      state.posts.data[index].liked_count +1
    }
  },
  
};

const actions = {

  store({
    commit
  }, formData) {
    return new Promise((resolve, reject) => {
      api.post(`/api/slave/post`, formData).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  index({ commit }) {
    return new Promise((resolve, reject) => {
      api.get(`api/slave/post`).then(res => {
        commit("set", { posts: res.data })
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  next({ commit, state }) {
    return new Promise((resolve, reject) => {
      api.get(`${state.posts.next_page_url}`).then(res => {
        commit("next", { posts: res.data });
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  like({ commit }, id) {
    return new Promise((resolve, reject) => {
      api.get(`/api/slave/post/${id}/like`)
      .then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  dislike({ commit }, id) {
    return new Promise((resolve, reject) => {
      let access = {
        _method: "delete"
      };

      api.get(`/api/slave/post/${id}/dislike`)
      .then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  show({ commit }, postId) {
    return new Promise((resolve, reject) => {
      api.get(`/api/slave/post/${postId}`).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
