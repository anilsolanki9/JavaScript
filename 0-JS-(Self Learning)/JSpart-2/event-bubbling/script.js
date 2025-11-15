let ul = document.querySelector('ul');

//event bubbling
ul.addEventListener('click', function (dets) {
  // console.log(dets.target);
  dets.target.classList.toggle('lt');
});
