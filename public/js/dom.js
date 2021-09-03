const btnLogSign = document.querySelector('.fa-user');

btnLogSign.addEventListener('click', (e) => {
  e.preventDefault();
  if (document.cookie !== '') {
    window.location.href = './signup.html';
  } else {
    window.location.href = './profile.html';
  }
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

const logBtn = document.querySelector('.log-btn');
const signUpBtn = document.querySelector('.sign-btn');
const faSignOutAlt = document.querySelector('.fa-sign-out-alt');
const joinBtn = document.getElementsByClassName('join-btn');
const userFromFetch = document.querySelector('.user-from-fetch');
const logOutForm = document.querySelector('.log-out-form');
fetch('/profileUser')
  .then((response) => response.json())
  .then((theData) => {
    console.log('the Data ' + theData);
    console.log('1112');
    console.log('asdasd');
    if (document.cookie !== '') {
      userFromFetch.textContent = theData.user.username;
      console.log('11111111111111');
      console.log(theData.user.username);
      logBtn.style.display = 'none';
      signUpBtn.style.display = 'none';
      for (let i = 0, len = joinBtn.length; i < len; i++) {
        joinBtn[i].style.display = 'none';
        console.log(i);
      }
      // console.log(joinBtn[]);
      btnLogSign.style.display = 'none';
      faSignOutAlt.style.display = 'block';
      btnLogSign.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = './.html';
      });
    } else {
      userFromFetch.style.display = 'none';
      logOutForm.style.display = 'none';
    }
  });
