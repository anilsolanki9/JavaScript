let email = document.querySelector('#inpEmail');
let password = document.querySelector('#inpPassword');
let emailError = document.querySelector('#emailError');
let passwordError = document.querySelector('#passwordError');
let h3 = document.querySelector('h3');
let form = document.querySelector('form');

form.addEventListener('submit', function (dets) {
  dets.preventDefault();

  emailError.style.display = 'none';
  passwordError.style.display = 'none';
  h3.style.opacity = 0;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let isEmailValid = emailRegex.test(email.value);
  let isPasswordValid = passwordRegex.test(password.value);

  let valid = true;

  if (!isEmailValid) {
    emailError.style.display = 'initial';
    emailError.style.color = 'red';
    valid = false;
  }

  if (!isPasswordValid) {
    passwordError.style.display = 'initial';
    passwordError.style.color = 'red';
    valid = false;
  }

  if (valid) {
    h3.style.opacity = 1;
  }
});
