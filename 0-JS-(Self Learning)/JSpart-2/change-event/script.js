let heading = document.querySelector('#header');
let select = document.querySelector('select');

select.addEventListener('change', function (dets) {
  // console.log(dets);
  // console.log(dets.target.value);
  let device = dets.target.value;
  device = `${device[0].toUpperCase()}${device.slice(1, device.length)}`;
  heading.textContent = `${device} Device Selected`;
});
