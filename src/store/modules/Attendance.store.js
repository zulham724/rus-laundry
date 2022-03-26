import { api } from "boot/axios";

const state = {};

const mutations = {};

const actions = {
  //request ini berfungsi untuk mengambil data array attendances, berdasarkan id karyawan.
  getEmployeeAttendances({ commit }, employeeid) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/attendance/getemployeeattendances/${employeeid}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  storeAttendance({commit}, employeeid){
    return new Promise((resolve, reject) => {
      api.post(`/api/slave/attendances`,{id:employeeid})
      .then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  // Fungsi buat mengkalkulasi total absen hari ini dengan total karyawan
  monthlyAttendanceReport1({ commit }, shopId) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/slave/attendance/monthlyattendancereport1/${shopId}`)
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
