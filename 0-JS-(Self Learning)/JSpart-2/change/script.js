let sel = document.querySelector('select');
let h2 = document.querySelector('h2');

sel.addEventListener('change', function (dets) {
  // console.log(dets);
  // console.log(dets.target.value);
  let device = dets.target.value;
  device = device[0].toUpperCase() + device.slice(1, device.length + 1);
  // console.log(device);
  h2.textContent = `${device} Selected`;
});
