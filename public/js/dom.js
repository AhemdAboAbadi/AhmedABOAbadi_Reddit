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
