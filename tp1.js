$(document).ready(function() {

  let ex2 = $('#ex2') ;
  let ex3 = $('#ex3') ;

// Exercice2
  //getCurrentPosition
  navigator.geolocation.getCurrentPosition(function(position) {
    var firstfunction = ex2.find('.function1') ;
    firstfunction.find('ul').append(
      "<li>Longitude : " + position.coords.longitude + "</li>",
      "<li>Latitude : " + position.coords.latitude + "</li>",
      "<li>Précision : " + position.coords.accuracy + "</li>",
      "<li>Vitesse : " + position.coords.speed + "</li>",
      "<li>Time stamp : " + position.timestamp + "</li>"
    ) ;
  });

  //watchPosition
  navigator.geolocation.watchPosition(function(position) {
    var secondfunction = ex2.find('.function2') ;
    secondfunction.find('ul').empty() ;
    secondfunction.find('ul').append(
      '<li>Longitude : ' + position.coords.longitude + '</li>',
      "<li>Latitude : " + position.coords.latitude + "</li>",
      "<li>Precision : " + position.coords.accuracy + "</li>",
      "<li>Vitesse : " + position.coords.speed + "</li>",
      "<li>Timestamp : " + position.timestamp + "</li>"
    ) ;
  });

  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(orientation) {
      var firstfunction = ex3.find('.function1') ;
      firstfunction.find('ul').empty() ;
      firstfunction.find('ul').append(
        "<li>Alpha : " + orientation.alpha + "</li>",
        "<li>Beta : " + orientation.beta + "</li>",
        "<li>Gamma : " + orientation.gamma + "</li>"
      ) ;
    });
  }

  if(window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(orientation) {
      var secondfunction = ex3.find('.function2') ;
      secondfunction.find('ul').empty() ;
      secondfunction.find('ul').append(
        "<li>Acceleration X : " + orientation.acceleration.x + "</li>",
        "<li>Acceleration Y : " + orientation.acceleration.y + "</li>",
        "<li>Acceleration Z : " + orientation.acceleration.z + "</li>",
        "<li>Rotation alpha : " + orientation.rotationRate.alpha + "</li>",
        "<li>Rotation beta : " + orientation.rotationRate.beta + "</li>",
        "<li>Rotation gamma : " + orientation.rotationRate.gamma + "</li>"
      ) ;
    });
  }

}) ;
