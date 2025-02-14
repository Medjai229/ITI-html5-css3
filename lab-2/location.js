var alertLocation = document.getElementById('alert-location');
var mapLocation = document.getElementById('map-location');
var long;
var lat;

alertLocation.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition((loc) => {
    long = loc.coords.longitude;
    lat = loc.coords.latitude;
    alert(`Longitude: ${long}\nLatitude: ${lat}`);
  });
});

mapLocation.addEventListener('click', () => {
  window.open(`http://maps.google.com/maps?q=${lat}+${long}`, '_blank');
});
