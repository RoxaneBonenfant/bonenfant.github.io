// BONENFANT Roxane
$(document).ready(function() {
navigator.geolocation.getCurrentPosition(function(position){
console.log(position) ;

// Map sous OpenStreetMap
var OSM = L.map('OSM').setView([position.coords.latitude, position.coords.longitude], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
maxZoom: 15
).addTo(OSM);

L.marker([position.coords.latitude, position.coords.longitude]).addTo(OSM)
.bindPopup('Vous êtes ici !')
.openPopup();

L.marker([43.7013, 7.2681]).addTo(OSM)
.bindPopup("Ici c'est Nice")
.openPopup();

// Map sous Stamen
const tCoord = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 }, ];
var t1 = new L.StamenTileLayer("terrain");
var tBermuda = L.polygon(tCoord, {
	color:'yellow',
    fillColor: '#f03',
    fillOpacity: 0.5
}) ;
var mapBermudes = new L.Map("mapBermudes", {
    center: new L.LatLng(24.886, -70.268),
    zoom: 4,
    maxZoom: 15
});
mapBermudes.addLayer(t1);
mapBermudes.addLayer(tBermuda) ;

var t2 = new L.StamenTileLayer("terrain");
var circle = L.circle([position.coords.latitude, position.coords.longitude], {
	radius: position.coords.accuracy
}) ;
var mapPos = new L.Map("mapPos", {
    center: new L.LatLng(position.coords.latitude, position.coords.longitude),
    zoom: 12,
    maxZoom: 15
});
mapPos.addLayer(t2) ;
mapPos.addLayer(circle) ;
});

}) ;
