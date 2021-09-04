const loginForm = document.querySelector('.log-form');
const errorMassage = document.querySelector('.error-massage');
const formEmail = document.querySelector('.form-email');
const formPassword = document.querySelector('.form-password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formEmail.value === '') {
    errorMassage.textContent = 'Email should not be empty';
  } else if (!formEmail.value.includes('@')) {
    errorMassage.textContent = 'Enter correct email address';
  } else if (formPassword.value === '') {
    errorMassage.textContent = ' password should not be empty';
  } else {
    loginForm.submit();
  }
});
