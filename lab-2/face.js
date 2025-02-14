var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var imgSad = new Image();
var imgSmiley = new Image();

imgSad.src = './images/sad.png';
imgSmiley.src = './images/smiley.png';

imgSad.onload = () => {
  drawImage(imgSad, 1);
};

canvas.addEventListener('mousedown', () => {
  drawImage(imgSmiley, 1.5);
});

canvas.addEventListener('mouseup', () => {
  drawImage(imgSad, 1);
});

function drawImage(img, scale) {
  ctx.clearRect(0, 0, 400, 400);
  var imgWidth = 200 * scale;
  var imgHeight = 200 * scale;
  var imgX = (400 - imgWidth) / 2;
  var imgY = (400 - imgHeight) / 2;
  ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
}
