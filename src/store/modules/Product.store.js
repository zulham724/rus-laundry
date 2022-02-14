import { api } from 'boot/axios';

const state = {
    products: {}
};

const mutations = {
    set_product(state, payload) {
      state.products = payload.products
    },
    
};

const actions = {
    updateProduct({ commit }, payload) {
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/updateproducts/${payload.id}`, payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    store({ commit }, product) {
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/product`, product).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    index({ commit }) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/product`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    getProductByShop() {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/getproductbyshop`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    destroy({ commit }, productId){
        let access = {
            _method: 'delete',
            id: productId
        }
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/product/${access.id}`, access).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    show({ commit }, productId) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/product/${productId}`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    getAnotherProducts({ commit }, shopId) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/${shopId}/getproducts`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    like({commit}, id){
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/product/${id}/like`)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    dislike({commit}, id){
        return new Promise((resolve, reject) => {
            let access = {
                _method: "delete"
            };

            api.get(`/api/slave/product/${id}/dislike`)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    deleteImagesTest({ commit }, dft){
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/deleteimage`, dft).then(res => {
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