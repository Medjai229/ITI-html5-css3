var circle = document.getElementById('circle');
console.log(circle);

circle.addEventListener('mouseover', (event) => {
  circle.setAttribute('fill', 'lightblue');
  circle.setAttribute('stroke', 'blue');
});

circle.addEventListener('mouseout', (event) => {
  circle.setAttribute('fill', 'red');
  circle.setAttribute('stroke', 'black');
});

circle.addEventListener('mousedown', (event) => {
  circle.setAttribute('fill', 'yellow');
  circle.setAttribute('stroke', 'green');
});

circle.addEventListener('mouseup', (event) => {
  circle.setAttribute('fill', 'red');
  circle.setAttribute('stroke', 'black');
  alert('SVG Circle');
});
