import { boot } from "quasar/wrappers";
import axios from "axios";
import { Notify } from "quasar";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: API_URL });

export default boot(({ app, router, store }) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api

    app.config.globalProperties.$axios = axios;
    // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
    //       so you won't necessarily have to import axios in each vue file
    app.config.globalProperties.$api = api;
    app.config.globalProperties.$storageUrl = STORAGE_URL;
    // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
    //       so you can easily perform requests against your app's API

    // membuat default header pada axios setiap baru buka aplikasi
    const token = store.getters["Auth/token"];
    if (token.access_token) {
        api.defaults.headers.common.Accept = "application/json";
        api.defaults.headers.common.Authorization = `${token.token_type} ${token.access_token}`;
    }
    //-------------------------------------------------------------

    // simulasi delay pada request axios
    // api.interceptors.request.use((config) => {
    //     if (config.delayed) {
    //         return new Promise(resolve => setTimeout(() => resolve(config), 3000));
    //     } else {
    //         return config;
    //     }
    // })
    //----------------------------------
    api.interceptors.response.use(
        (config) => {
            return config;
        },
        (error) => {
            // console.log("interceptor is running", error.response);
            if (error.response.status == 401) {
                store.dispatch("Auth/logout").then((res) => {
                    Notify.create("Silahkan login kembali");
                });
            } else if (
                error.response.status == 500 &&
                error.response.data.message ==
                "Masa Pakai Habis atau Melebihi syarat paket"
            ) {
                // console.log(error.response)
                // alert("Masa pakai habis");
                store.dispatch("Auth/logout").then((res) => {
                    Notify.create("Masa Pakai Habis atau Melebihi syarat paket");
                });
            } else if (
                error.response.status == 500 &&
                error.response.data.message == "Nomor WA Tidak Ditemukan"
            ) {
                Notify.create("Nomor WA Tidak Ditemukan");
            }
        }
    );
});

export { api };