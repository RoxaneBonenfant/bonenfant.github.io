$(document).ready(function() {
navigator.geolocation.getCurrentPosition(function(position){
	console.log(position) ;
    
	// Map sous OpenStreetMap
    var mapOSM = L.map('mapOSM').setView([position.coords.latitude, position.coords.longitude], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 15
    }).addTo(mapOSM);
    L.marker([position.coords.latitude, position.coords.longitude]).addTo(mapOSM)
    .bindPopup('Vous êtes là')
    .openPopup();
    L.marker([43.7013, 7.2681]).addTo(mapOSM)
    .bindPopup("Nice")
    .openPopup();

    // Map sous Stamen
    const stamen = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];
    var l1 = new L.StamenTileLayer("terrain");
    var bermudes = L.polygon(stamen, {
      color:'yellow',
      fillColor: '#fff9c4',
      fillOpacity: 0.5
    }) ;
    var mapStamenBermudes = new L.Map("mapStamenBermudes", {
      center: new L.LatLng(24.886, -70.268),
      zoom: 2,
      maxZoom: 10
    });
    mapStamenBermudes.addLayer(l1);
    mapStamenBermudes.addLayer(bermudes) ;
    var l2 = new L.StamenTileLayer("terrain");
    var circle = L.circle([position.coords.latitude, position.coords.longitude], {
      radius: position.coords.accuracy
    }) ;
    var mapStamenPos = new L.Map("mapStamenPos", {
      center: new L.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 12,
      maxZoom: 15
    });
    mapStamenPos.addLayer(l2) ;
    mapStamenPos.addLayer(circle) ;
  });
}) ;
