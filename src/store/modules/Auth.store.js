
import { api } from "src/boot/axios";

const state = {
    auth: "asd",
    count: 1
};

const actions = {
    increment({commit}) {
        commit('countIncrement')
    },
    login({commit}, credential) {
        console.log(credential)
        let access = {
            grant_type: "password",
            client_id: "2",
            client_secret: "N62KQsBzDyc4npIW1pIMkBRygQgRuyyNxas0P3PK",
            username: credential.username,
            password: credential.password
        }
        return new Promise((resolve, reject) => {
            api.post("/oauth/token", access).then(res=>{
                const token = res.data;
                api.defaults.headers.common.Accept = "application/json";

                api.defaults.headers.common.Authorization = `${token.token_type} ${token.access_token}`;

                api.get('/api/master/user').then((resp) => {
                    const auth = resp.data;
                    const payload = {
                        token: token,
                        auth: auth                        
                    };
                    console.log(payload)

                    // commit("auth_success", payload);
                    resolve(resp);
                })

                console.log(res)
                resolve(res)
            })
        })
    }
};

const mutations = {
    countIncrement(state) {
        state.count++
    }
};

const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};