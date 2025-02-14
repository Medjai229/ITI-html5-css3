var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var smile = true;

drawSmiley();

canvas.addEventListener('click', () => {
  if (smile) drawSad();
  else if (!smile) drawSmiley();
});

function drawSmiley() {
  smile = true;

  //? Big Yellow Circle
  ctx.beginPath();
  ctx.arc(250, 250, 200, 0, 2 * Math.PI);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.stroke();

  //? Left Eye
  ctx.beginPath();
  ctx.ellipse(170, 180, 25, 50, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();

  //? Right Eye
  ctx.beginPath();
  ctx.ellipse(340, 180, 25, 50, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();

  //? Big Smile
  ctx.beginPath();
  ctx.ellipse(250, 270, 150, 120, 0, Math.PI / 8, (7 * Math.PI) / 8);
  ctx.lineWidth = 8;
  ctx.stroke();

  //? Left Cheek
  ctx.beginPath();
  ctx.arc(95, 300, 25, 0, Math.PI / 2);
  ctx.lineWidth = 5;
  ctx.stroke();

  //? Right Cheek
  ctx.beginPath();
  ctx.arc(405, 300, 25, Math.PI, Math.PI / 2, true);
  ctx.lineWidth = 5;
  ctx.stroke();
}

function drawSad() {
  smile = false;

  //? Big Yellow Circle
  ctx.beginPath();
  ctx.arc(250, 250, 200, 0, 2 * Math.PI);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.stroke();

  //? Left Eye
  ctx.beginPath();
  ctx.ellipse(170, 180, 25, 50, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();

  //? Right Eye
  ctx.beginPath();
  ctx.ellipse(340, 180, 25, 50, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();

  //? Big Frown
  ctx.beginPath();
  ctx.ellipse(250, 400, 150, 120, 0, (9 * Math.PI) / 8, (15 * Math.PI) / 8);
  ctx.lineWidth = 8;
  ctx.stroke();

  //? Left Cheek
  ctx.beginPath();
  ctx.arc(95, 370, 25, (3 * Math.PI) / 2, 2 * Math.PI);
  ctx.lineWidth = 5;
  ctx.stroke();

  //? Right Cheek
  ctx.beginPath();
  ctx.arc(405, 370, 25, Math.PI, (3 * Math.PI) / 2);
  ctx.lineWidth = 5;
  ctx.stroke();
}
