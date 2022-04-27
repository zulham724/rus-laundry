import { api } from "boot/axios";

const state = {
    products: {},
};

const mutations = {
    set_product(state, payload) {
        state.products = payload.products;
    },
};

const actions = {
    searchProductLiked({ commit }, payload) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/slave/search_liked_product_by_user`, payload)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    getLikedProductByUser({ commit }, userid) {
        return new Promise((resolve, reject) => {
            api
                .get(`api/slave/get_liked_product_by_user/${userid}`)
                .then((res) => {
                    // commit('set_product', {products: res.data});
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    updateProduct({ commit }, product) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/slave/updateproducts/${product.id}`, product)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    store({ commit }, product) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/slave/product`, product)
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
                .get(`/api/master/product`)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    getProductByShop() {
        return new Promise((resolve, reject) => {
            api
                .get(`/api/slave/getproductbyshop`)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    destroy({ commit }, productId) {
        let access = {
            _method: "delete",
            id: productId,
        };
        return new Promise((resolve, reject) => {
            api
                .post(`/api/slave/product/${access.id}`, access)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    show({ commit }, productId) {
        return new Promise((resolve, reject) => {
            api
                .get(`/api/master/product/${productId}`)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    getAnotherProducts({ commit }, shopId) {
        return new Promise((resolve, reject) => {
            api
                .get(`/api/master/${shopId}/getproducts`)
                .then((res) => {
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
                .get(`/api/master/product/${id}/like`)
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
                .get(`/api/master/product/${id}/dislike`)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    deleteImagesTest({ commit }, payload) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/master/deleteimage`, payload)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    testadd({ commit }, formData) {
        return new Promise((resolve, reject) => {
            api
                .post(`/api/master/addimage`, formData)
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