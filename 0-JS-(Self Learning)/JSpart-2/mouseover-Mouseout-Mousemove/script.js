let box = document.querySelector('.box');

// box.addEventListener('mouseover', () => {
//   box.style.backgroundColor = 'yellow';
// });

// box.addEventListener('mouseout', () => {
//   box.style.backgroundColor = 'red';
// });

// mousemove addEventListener

window.addEventListener('mousemove', function (dets) {
  // console.log(dets);
  // console.log(dets.clientX, dets.clientY);
  box.style.left = dets.clientX + 'px';
  box.style.top = dets.clientY + 'px';
});
