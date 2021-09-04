const signupForm = document.querySelector('.signup-form');
const errorMassage = document.querySelector('.error-massage');
const formName = document.querySelector('.form-name');
const formUserName = document.querySelector('.form-userName');
const formEmail = document.querySelector('.form-email');
const formPassword = document.querySelector('.form-password');
const formConfirmPassword = document.querySelector('.form-confirm-password');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formName.value === '') {
    errorMassage.textContent = 'Name should not be empty';
  } else if (formUserName.value === '') {
    errorMassage.textContent = 'User Name should not be empty';
  } else if (formEmail.value === '') {
    errorMassage.textContent = 'Email should not be empty';
  } else if (!formEmail.value.includes('@')) {
    errorMassage.textContent = 'Enter correct email address';
  } else if (formPassword.value === '') {
    errorMassage.textContent = ' password should not be empty';
  } else if (formConfirmPassword.value === '') {
    errorMassage.textContent = 'confirm password should not be empty';
  } else if (formConfirmPassword.value !== formPassword.value) {
    errorMassage.textContent = 'password dows not match';
  } else {
    signupForm.submit();
  }
});
