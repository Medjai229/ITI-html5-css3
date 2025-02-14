var stars = document.querySelectorAll('img');
var starSpan = document.querySelector('#starSpan');
console.log('running');

stars.forEach((star) => {
  star.addEventListener('mouseover', (event) => {
    console.log('mouseover');
    console.log(event);
    let starIdx = event.target.id.at(-1);
    let currStar = event.target;
    for (; starIdx > 0; starIdx--) {
      currStar.setAttribute('src', './images/Filled_star.png');
      currStar = currStar.previousElementSibling;
    }
  });
});

stars.forEach((star) => {
  star.addEventListener('click', (event) => {
    let starIdx = event.target.id.at(-1);
    let currStar = event.target;
    for (; starIdx > 0; starIdx--) {
      if (currStar.dataset.clicked == 0) {
        currStar.setAttribute('src', './images/Filled_star.png');
        currStar.dataset.clicked = 1;
      } else if (currStar.dataset.clicked == 1) {
        currStar.setAttribute('src', './images/empty_star.png');
        currStar.dataset.clicked = 0;
      }
      currStar = currStar.previousElementSibling;
    }
  });
});

stars.forEach((star) => {
  star.addEventListener('mouseout', (event) => {
    console.log('mouseout');
    console.log(event);
    let starIdx = event.target.id.at(-1);
    let currStar = event.target;
    for (; starIdx > 0; starIdx--) {
      if (currStar.dataset.clicked == 0) {
        currStar.setAttribute('src', './images/empty_star.png');
        currStar = currStar.previousElementSibling;
      }
    }
  });
});
