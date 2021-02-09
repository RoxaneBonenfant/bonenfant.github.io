$(document).ready(function() {

  var canvas = document.getElementById('compasCanvas') ;
  var context = canvas.getContext('2d');
  var boussole = new Image();
  var aiguille = new Image() ;
  boussole.src = './images/compass.png' ;
  aiguille.src = './images/needle.png' ;

  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(orientation) {
      moveNeedle(orientation);
    }) ;
  }

  function moveNeedle(orientation) {
    console.log(orientation) ;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(boussole, 0, 0);
    context.save();
    context.translate(100, 100);
    context.rotate(orientation.alpha * (Math.PI / 180));
    context.drawImage(aiguille, -100, -100);
    context.restore();
  }

}) ;