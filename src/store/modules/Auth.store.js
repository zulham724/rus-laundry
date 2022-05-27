import { api } from "src/boot/axios";

const state = {
    token: {},
    auth: null,
};

const mutations = {
    set_token(state, payload) {
        state.token = payload.token;
    },
    logout(state, payload) {
        state.token = {};
        state.auth = null;
    },
    set_auth(state, payload) {
        state.auth = payload.auth;
    },
    update_phone_number(state, payload) {
        state.auth.contact_number = payload.contact_number;
    },
    update_avatar(state, payload) {
        state.auth.avatar = payload.avatar;
    },
    update_account(state, payload) {
        state.auth.name = payload.name;
        state.auth.email = payload.email;
        state.auth.contact_number = payload.contact_number;
        // toko
        state.auth.shop.name = payload.shop.name;
        state.auth.shop.description = payload.shop.description;
    },
    update_account_master(state, payload) {
        state.auth.name = payload.name;
        state.auth.email = payload.email;
        state.auth.contact_number = payload.contact_number;
        state.auth.shop.description = payload.shop.description;
    },
    auth_success(state, payload) {
        state.token = payload.token;
        state.auth = payload.auth;
    },
};

const actions = {
    checkAffiliateCode({ commit }, affiliate_code) {
        return new Promise((resolve, reject) => {
            api
                .get(`api/master/get-user-affiliate-code/${affiliate_code}`)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    register({ commit }, credential) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/master/register`, credential)
                .then((resp) => {
                    const token = resp.data;
                    api.defaults.headers.common.Accept = "application/json";
                    api.defaults.headers.common.Authorization = `${token.token_type} ${token.access_token}`;
                })
                .catch((err) => {
                    localStorage.clear();
                    reject(err);
                });
        });
    },
    login({ commit }, credential) {
        const access = {
            grant_type: "password",
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            ...credential,
        };
        return new Promise((resolve, reject) => {
            api
                .post(`/oauth/token`, access)
                .then((res) => {
                    const token = res.data;
                    api.defaults.headers.common.Accept = "application/json";
                    api.defaults.headers.common.Authorization = `${token.token_type} ${token.access_token}`;
                    commit("set_token", {
                        token: token,
                    });
                    api
                        .get(`/api/user`)
                        .then((resp) => {
                            const auth = resp.data;
                            commit("set_auth", {
                                auth: auth,
                            });
                        })
                        .finally(() => {
                            resolve(res.data);
                        });
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    reloadAuth({ commit }) {
        api
            .get(`/api/user`)
            .then((res) => {
                const auth = res.data;
                commit("set_auth", {
                    auth: auth,
                });
            })
            .catch((err) => {
                reject(err);
            });
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            commit("logout");
            delete api.defaults.headers.common.Authorization;
            this.$router.push("/login");
            resolve();
        });
    },
    addWANumber({ commit }, contact_number) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/slave/inputnumberphone`, contact_number)
                .then((res) => {
                    commit("update_phone_number", {
                        contact_number: contact_number,
                    });
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    addMasterWANumber({ commit }, contact_number) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/master/inputnumberphone`, contact_number)
                .then((res) => {
                    commit("update_phone_number", {
                        contact_number: contact_number,
                    });
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    updateAvatar({ commit }, payload) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/slave/updateavatar/${payload.id}`, payload.formData)
                .then((res) => {
                    commit("update_avatar", {
                        avatar: res.data.avatar,
                    });
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    // updateImage({ commit }, employee) {
    //       return new Promise((resolve, reject) => {
    //           api.post(`/api/slave/updateavatar/${employee.id}`, employee.formData).then(res => {
    //               resolve(res)
    //           }).catch(err => {
    //               reject(err)
    //           })
    //       })
    //   },
    updateAvatarMaster({ commit }, payload) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/master/update-avatar/${payload.id}`, payload.formData)
                .then((res) => {
                    commit("update_avatar", {
                        avatar: res.data.avatar,
                    });
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    updateAccountMaster({ commit }, payload) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/master/update-profile/${payload.id}`, payload)
                .then((res) => {
                    commit("update_account_master", res.data);
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    updateAccount({ commit }, Account) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/slave/updateaccount/${Account.id}`, Account)
                .then((res) => {
                    commit("update_account", res.data);
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    changePassword({ commit }, password) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/slave/changepassword`, password)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    changePasswordMaster({ commit }, payload) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/master/change-password`, payload)
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
    isLoggedIn: (state) => !!state.token.access_token,
    auth: (state) => state.auth,
    token: (state) => state.token,
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};