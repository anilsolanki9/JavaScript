let h1 = document.querySelector('h1');

window.addEventListener('keydown', function (event) {
  // console.log(event);
  // console.log(event.key)
  if (event.key === ' ') {
    h1.textContent = 'SPC';
  } else {
    h1.textContent = event.key;
  }
});
