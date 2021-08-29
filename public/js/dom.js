const btnLogSign = document.querySelector('.fa-user');

btnLogSign.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = './signup.html';
});

const popUpTop = document.querySelector('.pop_up_to_top');
window.addEventListener('scroll', () => {
  popUpTop.classList.toggle('active', window.scrollY > 900);
});

popUpTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
