const btnLogSign = document.querySelector('.fa-user');

btnLogSign.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('ssss');
  window.location.href = './signup.html';
});
