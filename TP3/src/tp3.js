let isNight = false ;
$(document).ready(function() {
  // Canvas
  drawCanvas() ;

  // SVG
  $('#soleil').click(function() {
    if(!isNight) {
      isNight = true ;
      document.getElementById('ciel').className.baseVal = 'night' ;
    } else {
      isNight = false ;
      document.getElementById('ciel').className.baseVal = 'day' ;
    }
  }) ;
}) ;

function drawCanvas() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.src = './image/montagne.jpg' ;
  img.onload = function() {
    scaleToFit(this, ctx);

    var soleil = new Path2D();
    soleil.arc(350, 50, 25, 0, Math.PI * 2);
    ctx.fillStyle = '#FF0' ;
    ctx.fill(soleil);

    ctx.beginPath() ;
    ctx.fillStyle = '#06BAAC' ;
    ctx.fillRect(150, canvas.height - 90, 75, 80) ;

    ctx.beginPath() ;
    ctx.fillStyle = '#06BA6D' ;
    ctx.fillRect(170, canvas.height - 45, 25, 35) ;

    ctx.beginPath() ;
    ctx.fillStyle = '#B3ECB4' ;
    ctx.moveTo(150, canvas.height - 90);
    ctx.lineTo(187.5, 175);
    ctx.lineTo(225, canvas.height - 90);
    ctx.fill();
  }
}

function scaleToFit(img, ctx){
  var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
  var x = (canvas.width / 2) - (img.width / 2) * scale;
  var y = (canvas.height / 2) - (img.height / 2) * scale;
  ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
}
