// Bonenfant Roxane
$(document).ready(function() {
  var image = document.getElementById('needle');
  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(orientation) {
		image.style.transform = 'rotate(' + orientation.alpha + 'deg)' ;
    }) ;
  }
}) ;
