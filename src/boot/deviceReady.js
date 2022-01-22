import store from "./../store";
export default ({ app, router, store, Vue }) => {
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        console.log('cordova siap')
    }
};