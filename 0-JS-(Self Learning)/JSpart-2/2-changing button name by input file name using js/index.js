let btn = document.querySelector('#btn');
let fileInp = document.querySelector('#fileInp');

btn.addEventListener('click', function () {
  fileInp.click();
  // javascript ke throuw input tag pe click krvaya
});

// file input hone pe change hoga to ye run hoga, and uski detais function me jaegi.
fileInp.addEventListener('change', function (dets) {
  // console.log(dets); // dets ki details dekhne ke liye
  // dets ke target property me bhot sari usefull values hai.

  // btn.textContent = dets?.target?.files[0]?.name; // proper work nahi krta

  const file = dets.target.files[0]; // file nahi milegi to  file ki value undefined hogi
  if (file) {
    btn.textContent = file.name; // name ko access kiya
  }
});
