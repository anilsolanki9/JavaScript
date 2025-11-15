let fileInp = document.querySelector('#fileInp');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => fileInp.click());

fileInp.addEventListener('change', function (dets) {
  // console.log(dets);
  // console.log(dets.target.files[0].name);
  let file = dets.target.files[0];
  if (file) {
    // console.log(dets.target.files[0].name);
    btn.textContent = dets.target.files[0].name;
  }
});
