var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var bar1 = {
  height: 150,
  direction: 1,
};
var height2 = 200;
var bar3 = {
  height: 300,
  direction: 1,
};
var height4 = 350;

drawLine();
drawBar1();
drawBar2();
drawBar3();
drawBar4();

function drawBar1() {
  setInterval(() => {
    //? draw the rectangle
    ctx.clearRect(24, 0, 52, 500);
    ctx.beginPath();
    ctx.rect(25, 500 - bar1.height, 50, bar1.height);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();

    //? switch direction when it reaches top and bottom
    if (bar1.direction === 1) {
      bar1.height += 5;
      if (bar1.height >= 500) bar1.direction = -1;
    } else if (bar1.direction === -1) {
      bar1.height -= 10;
      if (bar1.height <= 150) bar1.direction = 1;
    }
  }, 30);
}

function drawBar2() {
  setInterval(() => {
    //? draw the rectangle
    ctx.clearRect(124, 0, 52, 500);
    ctx.beginPath();
    ctx.rect(125, 500 - height2, 50, height2);
    ctx.fillStyle = 'cyan';
    ctx.fill();
    ctx.stroke();
    height2 += 5;

    //? reset the height when it reaches top
    if (height2 >= 500) height2 = 200;
  }, 30);
}

function drawBar3() {
  setInterval(() => {
    //? draw the rectangle
    ctx.clearRect(224, 0, 52, 500);
    ctx.beginPath();
    ctx.rect(225, 500 - bar3.height, 50, bar3.height);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke();

    //? switch direction when it reaches top and bottom
    if (bar3.direction === 1) {
      bar3.height += 15;
      if (bar3.height >= 500) bar3.direction = -1;
    } else if (bar3.direction === -1) {
      bar3.height -= 5;
      if (bar3.height <= 0) bar3.direction = 1;
    }
  }, 30);
}

function drawBar4() {
  setInterval(() => {
    //? draw the rectangle
    ctx.clearRect(324, 0, 52, 500);
    ctx.beginPath();
    ctx.rect(325, 500 - height4, 50, height4);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();
    height4 += 20;

    //? reset the height when it reaches top
    if (height4 >= 500) height4 = 0;
  }, 30);
}

function drawLine() {
  ctx.beginPath();
  ctx.moveTo(0, 500);
  ctx.lineTo(500, 500);
  ctx.lineWidth = 1;
  ctx.stroke();
}
