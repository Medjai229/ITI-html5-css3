var circle = document.getElementById('circle');
console.log(circle);

circle.addEventListener('mouseover', (event) => {
  circle.setAttribute('fill', 'url(#grad2');
  circle.setAttribute('stroke', '');
  circle.setAttribute('filter', 'url(#fltr1)');
});

circle.addEventListener('mouseout', (event) => {
  circle.setAttribute('fill', 'url(#grad1)');
  circle.setAttribute('stroke', 'black');
  circle.setAttribute('filter', '');
});

circle.addEventListener('mousedown', (event) => {
  circle.setAttribute('fill', 'url(#grad3)');
  circle.setAttribute('stroke', 'green');
  circle.setAttribute('filter', 'url(#fltr2)');
});

circle.addEventListener('mouseup', (event) => {
  circle.setAttribute('fill', 'url(#grad1)');
  circle.setAttribute('stroke', 'black');
  alert('SVG Circle');
});
