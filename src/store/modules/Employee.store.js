import { api } from "boot/axios";


const state = {

};

const mutations = {

};

const actions = {
    getEmployeesByShop({ commit }, shopId) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/shop/${shopId}/employees`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    show({ commit }, employeeId) {
        return new Promise((resolve, reject) => {
            api.get(`/api/slave/employee/${employeeId}`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    update({ commit }, employee) {
        let access = {
            _method: 'PUT',
            employee: employee
        }
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/employee/${access.employee.id}`, access).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    store({ commit }, employee) {
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/employee`, employee).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    destroy({ commit }, employeeId) {
        let access = {
            _method: 'delete',
            id: employeeId
        }
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/employee/${access.id}`, access).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    attendanceIn({ commit }, employeeId) {
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/attendances`, { id: employeeId }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    attendanceOut({ commit }, employeeId) {
        return new Promise((resolve, reject) => {
            api.post(`/api/slave/attendance/out`, { id: employeeId }).then(res => {
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