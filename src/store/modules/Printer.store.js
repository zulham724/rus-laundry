const state = {
  history_printers: [],
};

const mutations = {
  put_history_printers(state, payload) {
    let exists = state.history_printers.filter(
      (item) => item.mac_address == payload.printer.mac_address
    ).length;
    if (!exists) {
      state.history_printers.push(payload.printer);
    }
  },
  update_connect_status_printer(state, payload) {
    // console.log(state, payload.printer)
    let index = state.history_printers.findIndex(
      (item) => item.mac_address == payload.printer.mac_address
    );
    // console.log(index)
    if (index > -1) {
      state.history_printers[index] = {
        ...payload.printer,
      };
    }
  },
  refresh_printer_history(state) {
    state.history_printers = state.history_printers.map((item) => {
      item.connect_status = false;
      return item;
    });
  },
  set_connect(state, name) {
    state.printers = state.printers.map((item) => {
      if (item.name == name) {
        console.log("Status berubah");
        item.connect_status = true;
      }
      return item;
    });
  },
  set_disconnect(state, name) {
    state.printers = state.printers.map((item) => {
      if (item.name == name) {
        console.log("Status berubah");
        item.connect_status = false;
      }
      return item;
    });
  },
  clear(state) {
    state.history_printers = [];
  },
};

const actions = {
  print({ dispatch }, dataUrl) {
    window.BTPrinter.printBase64(
      function (data) {
        console.log("Printing");
        console.log(data);
      },
      function (err) {
        console.log("Error");
        console.log(err);
      },
      dataUrl,
      1
    );
  },
  connect({ commit, dispatch }, name) {
    return new Promise((resolve, reject) => {
      window.BTPrinter.connect(
        (data) => {
          console.log("Connected");
          console.log(data);
          dispatch("run")
            .then((res) => {
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            });
        },
        (err) => {
          console.log("Error");
          console.log(err);
          reject(err);
        },
        name
      );
    });
  },
  disconnect({dispatch},name) {
    return new Promise((resolve, reject) => {
      window.BTPrinter.disconnect(
        (data) => {
          console.log("Disconnected");
          console.log(data);
          dispatch("run").then(res=>{
            resolve(res)
          }).catch(err=>{
            reject(err)
          })
        },
        (err) => {
          console.log("Error");
          console.log(err);
          reject(err)
        },
        name
      );
    });
  },
  getListPrinter({ commit }) {
    //get List paired bluetooth devices array
    console.log(window);
    return new Promise((resolve, reject) => {
      window.BTPrinter.list(
        (data) => {
          console.log("list printer", data);
          let names = data.filter((item, i) => i % 3 === 0 || false);
          let mac_addresses = data.filter((item, i) => i % 3 === 1 || false);
          let device_types = data.filter((item, i) => i % 3 === 2 || false);
          let printers = [];

          names.forEach((item, i) => {
            console.log(device_types[i]);
            if (device_types[i] == 3) {
              printers.push({
                name: item,
                mac_address: mac_addresses[i],
                device_type: device_types[i],
              });
            }
          });

          printers.forEach((item) => {
            commit("put_history_printers", {
              printer: item,
            });
          });
          resolve(printers);
        },
        (err) => {
          console.log("Error Get List");
          console.log(err);
          reject(err);
        }
      );
    });
  },

  checkingConnectStatus({ commit }, list_printers) {
    return new Promise((resolve, reject) => {
      let printers = list_printers;
      printers = printers.map((item, i) => {
        window.BTPrinter.connected(
          (data) => {
            console.log(item.name, data);
            if (data == "true") {
              item.connect_status = true;
            } else {
              item.connect_status = false;
            }
          },
          (err) => {
            console.log("error", err);
          },
          item.name
        );
        return item;
      });

      Promise.all(printers).then((res) => {
        res.forEach((item) => {
          commit("update_connect_status_printer", {
            printer: item,
          });
        });
        resolve(res);
      });
    });
  },

  run({ commit, dispatch, state }) {
    return new Promise((resolve, reject) => {
      commit("refresh_printer_history");
      console.log("history ", state.history_printers);
      dispatch("getListPrinter")
        .then((res) => {
          dispatch("checkingConnectStatus", res).then((res2) => {
            console.log("list printer dengan status koneksi", res2);
            res2.forEach((availablePrinter, i) => {
              let existPrinter = state.history_printers.find(
                (item) => item.mac_address == availablePrinter.mac_address
              );
              if (existPrinter) {
                console.log("exist", availablePrinter);
                commit("update_connect_status_printer", {
                  printer: availablePrinter,
                });
              } else {
                console.log("not exist", availablePrinter);
                commit("put_history_printers", { printer: availablePrinter });
              }
            });
            let connected_printer = res2.find((item) => item.connect_status);
            console.log("printer yang tekoneksi", connected_printer);
            resolve({
              available: res2,
              connected: connected_printer,
            });
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

const getters = {
  get_connected_printer: (state) => {
    let connected_printer = state.history_printers.find(
      (item) => item.connect_status
    );
    return connected_printer ? connected_printer : null;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
