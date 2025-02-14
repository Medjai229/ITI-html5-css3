var dropElement;
var imgs = document.querySelectorAll('img');
var divDroper = document.querySelector('#droper');

divDroper.addEventListener('drop', (event) => {
  event.preventDefault();

  // ? get the position of the mouse to the div
  const mouseX = event.clientX - divDroper.offsetLeft;
  const mouseY = event.clientY - divDroper.offsetTop;
  console.log(event.clientX, event.clientY);
  console.log(mouseX, mouseY);

  // ? get the position of the img to drop
  let imgX = mouseX - dropElement.offsetWidth / 2;
  let imgY = mouseY - dropElement.offsetHeight / 2;

  dropElement.style.left = imgX + 'px';
  dropElement.style.top = imgY + 'px';

  divDroper.appendChild(dropElement);
});

divDroper.addEventListener('dragover', (event) => {
  event.preventDefault();
});

imgs.forEach((img) => {
  img.addEventListener('dragstart', (event) => {
    dropElement = event.target;
    dropElement.style.position = 'absolute';
  });
});
