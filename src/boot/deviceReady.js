import store from "./../store";
export default async ({
  app,
  router,
  store,
  Vue
}) => {
  function onDeviceReady() {
    console.log('cordova siap')
    window.open = cordova.InAppBrowser.open

  }
  await document.addEventListener("deviceready", onDeviceReady, false);

};
