import { api } from "boot/axios";

const state = {
    posts: {},
    my_posts: {},
    liked_posts: {},
};

const mutations = {
    set(state, payload) {
        state.posts = payload.posts;
        console.log("masterpost", state.posts);
    },
    setSize(state, payload) {
        const index = state.posts.data.findIndex((item) => item.id == payload.id);
        if (index > -1) state.posts.data[index].size = payload.size;
    },
    next(state, payload) {
        state.posts = {
            ...payload.posts,
            data: [...state.posts.data, ...payload.posts.data],
        };
    },
    liked(state, payload) {
        const index = state.posts.data.findIndex(
            (item) => item.id == payload.post_id
        );
        console.log(index);
        if (index > -1) {
            state.posts.data[index].liked_count + 1;
        }
    },
    set_my_posts(state, payload) {
        state.my_posts = payload.my_posts;
    },
    next_my_posts(state, payload) {
        state.my_posts = {
            ...payload.my_posts,
            data: [...state.my_posts.data, ...payload.my_posts.data],
        };
    },
    set_size_my_post(state, payload) {
        const index = state.my_posts.data.findIndex(
            (item) => item.id == payload.id
        );
        if (index > -1) state.my_posts.data[index].size = payload.size;
    },

    set_liked_posts(state, payload) {
        state.liked_posts = payload.liked_posts;
    },
    next_liked_posts(state, payload) {
        state.liked_posts = {
            ...payload.liked_posts,
            data: [...state.liked_posts.data, ...payload.liked_posts.data],
        };
    },
    set_size_liked_post(state, payload) {
        const index = state.liked_posts.data.findIndex(
            (item) => item.id == payload.id
        );
        if (index > -1) state.liked_posts.data[index].size = payload.size;
    },
    delete_post_by_id(state, id) {
        // console.log('cek payload', payload);
        const index = state.posts.data.findIndex((item) => item.id == id);
        if (index > -1) state.posts.data.splice(index, 1);
    },
};

const actions = {
    updatePost({ commit }, payload) {
        return new Promise((resolve, reject) => {
            const access = {
                _method: "PUT",
                ...payload,
            };
            api
                .put(`api/master/post/${payload.id}`, access)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    deletePost({ commit }, post_id) {
        return new Promise((resolve, reject) => {
            const access = {
                _method: "DELETE",
            };
            api
                .delete(`/api/master/post/${post_id}`, access)
                .then((res) => {
                    commit("delete_post_by_id", { posts: res.data });
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    nextMyPost({ commit, state }) {
        return new Promise((resolve, reject) => {
            api
                .get(`${state.my_posts.next_page_url}`)
                .then((res) => {
                    commit("next_my_posts", { my_posts: res.data });
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    getPostByUser({ commit }, userid) {
        return new Promise((resolve, reject) => {
            api
                .get(`/api/master/getpostbyuser/${userid}`)
                .then((res) => {
                    commit("set_my_posts", { my_posts: res.data });
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    getPostByPostId({ commit }, postid) {
        return new Promise((resolve, reject) => {
            api
                .get(`/api/master/getpostbypostid/${postid}`)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    nextLikedPost({ commit, state }) {
        return new Promise((resolve, reject) => {
            api
                .get(`${state.liked_posts.next_page_url}`)
                .then((res) => {
                    commit("next_liked_posts", { liked_posts: res.data });
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    getLikedPostByUser({ commit }, userid) {
        return new Promise((resolve, reject) => {
            api
                .get(`/api/master/getlikedpostbyuser/${userid}`)
                .then((res) => {
                    commit("set_liked_posts", { liked_posts: res.data });
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    getProfilePostByUser({ commit }, userid) {
        return new Promise((resolve, reject) => {
            api
                .get(`/api/master/get_profile_by_id/${userid}`)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    store({ commit }, formData) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/master/post`, formData)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    index({ commit }) {
        return new Promise((resolve, reject) => {
            api
                .get(`api/master/post`)
                .then((res) => {
                    commit("set", { posts: res.data });
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    next({ commit, state }) {
        return new Promise((resolve, reject) => {
            api
                .get(`${state.posts.next_page_url}`)
                .then((res) => {
                    commit("next", { posts: res.data });
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    like({ commit }, id) {
        return new Promise((resolve, reject) => {
            api
                .get(`/api/master/post/${id}/like`)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    dislike({ commit }, id) {
        return new Promise((resolve, reject) => {
            let access = {
                _method: "delete",
            };

            api
                .get(`/api/master/post/${id}/dislike`)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    show({ commit }, postId) {
        return new Promise((resolve, reject) => {
            api
                .get(`/api/master/post/${postId}`)
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