var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var paint = false;
var erase = false;
var coord = { x: 0, y: 0 };

document.addEventListener('mousedown', startAction);
document.addEventListener('mouseup', stopAction);
document.addEventListener('mousemove', action);

function getPosition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

function startAction(event) {
  if (event.button == 0) paint = true;
  if (event.button == 2) erase = true;
  getPosition(event);
}

function stopAction(event) {
  if (event.button == 0) paint = false;
  if (event.button == 2) erase = false;
}

function action(event) {
  if (!paint && !erase) return;

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  if (paint) ctx.strokeStyle = 'black';
  if (erase) ctx.strokeStyle = 'white';
  ctx.moveTo(coord.x, coord.y);
  getPosition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}
