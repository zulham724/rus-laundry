const state = {
    history_printers: [],

};

const mutations = {

    put_history_printers(state, payload) {
        let exists = state.history_printers.filter(item => item.mac_address == payload.printer.mac_address).length
        if (!exists) {
            state.history_printers.push(payload.printer)
        }
    },
    update_connect_status_printer(state, payload) {

        // console.log(state, payload.printer)
        let index = state.history_printers.findIndex((item) => item.mac_address == payload.printer.mac_address)
            // console.log(index)
        if (index > -1) {
            state.history_printers[index] = {
                ...payload.printer
            }
        }
    }

};

const actions = {

    getListPrinter({
        commit
    }) {
        //get List paired bluetooth devices array
        return new Promise((resolve, reject) => {
            window.BTPrinter.list(
                (data) => {

                    let names = data.filter((item, i) => i % 3 === 0 || false);
                    let mac_addresses = data.filter((item, i) => i % 3 === 1 || false);
                    let device_types = data.filter((item, i) => i % 3 === 2 || false);
                    let printers = [];

                    names.forEach((item, i) => {
                        printers[i] = {
                            name: item,
                            mac_address: mac_addresses[i],
                            device_type: device_types[i],
                        };
                    });

                    printers.forEach((item) => {
                        commit("put_history_printers", {
                            printer: item,
                        });
                    });
                    resolve(printers)
                },
                (err) => {
                    console.log("Error");
                    console.log(err);
                    reject(err)
                }
            );
        })
    },

    checkingConnectStatus({
        commit
    }, list_printers) {

        let printers = list_printers
        printers = printers.map((item, i) => {
            window.BTPrinter.connected(
                (data) => {
                    console.log(item.name, data)
                    if (data == "true") {
                        item.status = true
                    } else {
                        item.status = false
                    }

                },
                (err) => {
                    console.log('error', err)
                },
                item.name
            )
            return item
        })

        // Promise.all(printers).then(res => {
        //     res.forEach((item) => {
        //         commit("update_connect_status_printer", {
        //             printer: item
        //         })
        //     })

        // })
    },
};

const getters = {
    get_connected_printer: state => {
        let connected_printer = state.history_printers.find(item => item.status_pairing)
        return connected_printer ? connected_printer : null
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}