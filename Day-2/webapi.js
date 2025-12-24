const webapi = document.getElementById("dmeo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    webapi.innerHTML = "Geo Location Is Not supportyed in your browser";
  }
}

function showPosition() {
  myElement.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
