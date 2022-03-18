import store from "./../store";
export default async ({
      app,
      router,
      store,
      Vue
}) => {
    function onDeviceReady() {
        console.log('cordova siap')
    }
    await document.addEventListener("deviceready", onDeviceReady, false);

};