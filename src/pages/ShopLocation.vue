<template>
  <q-layout>
    <q-page>
      <div>halo</div>
    </q-page>
  </q-layout>
</template>

<script>
export default {
  data() {},
  mounted() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      console.log(navigator);
      var onSuccess = function (position) {
        console.log(
          "Latitude: " +
            position.coords.latitude +
            "\n" +
            "Longitude: " +
            position.coords.longitude +
            "\n" +
            "Altitude: " +
            position.coords.altitude +
            "\n" +
            "Accuracy: " +
            position.coords.accuracy +
            "\n" +
            "Altitude Accuracy: " +
            position.coords.altitudeAccuracy +
            "\n" +
            "Heading: " +
            position.coords.heading +
            "\n" +
            "Speed: " +
            position.coords.speed +
            "\n" +
            "Timestamp: " +
            position.timestamp +
            "\n"
        );
      };

      // onError Callback receives a PositionError object
      //
      function onError(error) {
        console.log(
          "code: " + error.code + "\n" + "message: " + error.message + "\n"
        );
      }
      let res = navigator.geolocation.getCurrentPosition(onSuccess, onError)
      console.log(res);
    },
  },
};
</script>

<style></style>
