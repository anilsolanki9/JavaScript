let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let btn = document.querySelector('button');

/* ----------------------------- event bubbling ----------------------------- */
// niche se uper aata hai, sab parents ko events ko chalate hue. if there are not event capturing on on them.
// btn.addEventListener('click', () => {
//   console.log('Button Clicked');
// });

// a.addEventListener('click', () => {
//   console.log('a Clicked');
// });

// b.addEventListener('click', () => {
//   console.log('b Clicked');
// });

// c.addEventListener('click', () => {
//   console.log('c Clicked');
// });

/* ----------------------------- event capturing ---------------------------- */
//just oposite of event bubbling :- Jis parent pe event capturing on hoga, woh uper se niche aate time chal jaega, and niche se uper aate time nahi chalega.

btn.addEventListener('click', () => {
  console.log('Button Clicked');
});

a.addEventListener(
  'click',
  () => {
    console.log('a Clicked');
  },
  true
);

b.addEventListener('click', () => {
  console.log('b Clicked');
});

c.addEventListener(
  'click',
  () => {
    console.log('c Clicked');
  },
  true
);
