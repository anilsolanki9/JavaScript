// animation: keypress 0.4s ease;
const incButton = document.querySelector('#increase');
const decButton = document.querySelector('#decrease');
const btn = document.querySelector('#btn');
const inc = document.querySelector('#inc');
const dec = document.querySelector('#dec');
let counterText = document.querySelector('#counter-box');

let counter = 0;
let isGameStarted = false;

inc.addEventListener('click', function () {
  inc.classList.add('btnClick');
  setTimeout(() => {
    inc.classList.remove('btnClick');
  }, 300);

  if (isGameStarted) {
    counterText.textContent = ++counter;
  }
});

dec.addEventListener('click', function () {
  dec.classList.add('btnClick');
  setTimeout(() => {
    dec.classList.remove('btnClick');
  }, 300);

  if (isGameStarted) {
    counterText.textContent = --counter;
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    inc.classList.add('btnClick');
    setTimeout(() => {
      inc.classList.remove('btnClick');
    }, 300);

    if (isGameStarted) {
      counterText.textContent = ++counter;
    }
  } else if (event.key === 'ArrowDown') {
    dec.classList.add('btnClick');
    setTimeout(() => {
      dec.classList.remove('btnClick');
    }, 300);

    if (isGameStarted) {
      counterText.textContent = --counter;
    }
  }
});

btn.addEventListener('click', function () {
  btn.classList.add('btnClick');
  setTimeout(() => {
    btn.classList.remove('btnClick');
  }, 300);

  if (!isGameStarted) {
    counterText.textContent = counter;
    btn.setAttribute('value', 'Restart');
    isGameStarted = true;
  } else {
    counterText.textContent = 'Press Start to Run Counter';
    btn.setAttribute('value', 'Start');
    isGameStarted = false;
    counter = 0;
  }
});
