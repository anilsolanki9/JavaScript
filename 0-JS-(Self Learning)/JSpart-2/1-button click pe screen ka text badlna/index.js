let box = document.querySelector('#box');

window.addEventListener('keydown', function (dets) {
  if (dets.key === ' ') {
    box.textContent = 'Space';
  } else {
    box.textContent = dets.key;
  }
});
