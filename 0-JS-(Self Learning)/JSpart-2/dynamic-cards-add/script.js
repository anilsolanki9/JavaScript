let form = document.querySelector('form');
let container = document.querySelector('.container');
let inpfield = document.querySelectorAll('.inpfield');

form.addEventListener('submit', function (dets) {
  dets.preventDefault();

  // console.log(dets);
  let profileImageURL = dets.target[0].value;
  let name = dets.target[1].value;
  let occupassion = dets.target[2].value;
  let info = dets.target[3].value;

  if (!(profileImageURL && name && occupassion && info)) return;

  let card = document.createElement('div');
  card.classList.add('card');

  let profile = document.createElement('div');
  profile.classList.add('profile');

  let img = document.createElement('img');
  img.setAttribute('src', profileImageURL);

  let h2 = document.createElement('h2');
  h2.textContent = name;

  let h5 = document.createElement('h5');
  h5.textContent = occupassion;

  let p = document.createElement('p');
  p.textContent = info;

  profile.append(img);
  card.append(profile);
  card.append(h2);
  card.append(h5);
  card.append(p);

  container.append(card);

  inpfield.forEach(inp => {
    inp.value = '';
  });
});
