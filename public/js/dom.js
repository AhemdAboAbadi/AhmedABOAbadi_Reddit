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

// const mainPost = document.querySelector('.main-post')
// const postPart1 = document.querySelector('.post-part-1')
// const creatElement = (tagName, className, parentNode, textContent) => {};

const home = document.querySelector('.lode-main-post');
const mainHome = document.createElement('div');
mainHome.classList.add('post-side');
// classList.add("mystyle");
mainHome.innerHTML = `
<div class="main-post">
<div class="post-part-1">
  <p>r/AhmedABOAbadi</p>
  <span>Posted byu/42words 19 hours ago </span>
  <button><i class="fal fa-plus"></i><a href="./signup.html">Join</a></button>
</div>
<div class="post-part-2">
  <p>these darn spoiled kids today, with their "nEeD tO eAt aT ReGuLaR iNtErVaLs" or whatever, smh my head</p>
  <span>i.imgur.com/19xiHN... <i class="far fa-external-link"></i></span>
</div>

<div class="post-part-3">
  <img src="./image/post.jpg" alt="">
</div>

<div class="post-part-4">
  <p><i class="fal fa-comment-alt"></i> 3.3K Comments</p>
  <p><i class="fal fa-share"></i> Share</p>
  <p><i class="fal fa-bookmark"></i>  Save</p>
  <p><i class="far fa-ellipsis-h"></i></p>
</div>
</div>
`;
home.appendChild(mainHome);

// ////////////
const logBtn = document.querySelector('.log-btn');
const signUpBtn = document.querySelector('.sign-btn');
const faSignOutAlt = document.querySelector('.fa-sign-out-alt');
// const joinBtn = document.querySelectorAll('button.join-btn');
const joinBtn = document.getElementsByClassName('join-btn');
console.log(joinBtn);
const userFromFetch = document.querySelector('.user-from-fetch');
const logOutForm = document.querySelector('.log-out-form');
fetch('/profileUser')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // console.log(data.rows[0].name);
    console.log('1112');
    console.log('asdasd');
    if (document.cookie !== '') {
      userFromFetch.textContent = data.rows[0].username;
      console.log('11111111111111');
      logBtn.style.display = 'none';
      signUpBtn.style.display = 'none';
      // for (let i = 0; i <= joinBtn.length; i++) {}

      for (let i = 0, len = joinBtn.length; i < len; i++) {
        joinBtn[i].style.display = 'none';
        console.log(i);
        console.log(joinBtn[i]);
      }

      // joinBtn.style.color = 'red';
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

// logBtn.style.display = 'none';
// signUpBtn.style.display = 'none';
// btnLogSign.style.display = 'none';
// faSignOutAlt.style.display = 'block';
// btnLogSign.addEventListener('click', (e) => {
//   e.preventDefault();
//   window.location.href = './.html';
// });
