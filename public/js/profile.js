const newPostBtn = document.querySelector('.add-post');
const cancelBtn = document.querySelector('.cancel-btn');
const addNoteForm = document.getElementById('add-note-form');
const bgOverlay = document.querySelector('.bg-overlay');
const yourNameSpan = document.querySelector('.your-name-span');
const yourEmailSpan = document.querySelector('.your-email-span');

newPostBtn.addEventListener('click', () => {
  addNoteForm.style.display = 'block';
  bgOverlay.style.display = 'block';
});
cancelBtn.addEventListener('click', () => {
  addNoteForm.style.display = 'none';
  bgOverlay.style.display = 'none';
});
let userName = '';
fetch('/profileUser')
  .then((response) => response.json())
  .then((data) => {
    yourEmailSpan.textContent = data.user.email;
    yourNameSpan.textContent = data.user.username;
    userName = data.user.username;
    return fetch('/posts');
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data.posts[0]);
    const home = document.querySelector('.user-posts');

    data.posts.forEach((post) => {
      const mainHome = document.createElement('div');
      mainHome.classList.add('post-side');
      mainHome.innerHTML = `
      <div class="like-dislike">
            <i class="fal fa-arrow-alt-up"></i>
            <p>27.5K</p>
            <i class="fal fa-arrow-alt-down"></i>
          </div>
      <div class="main-post">
      <div class="post-part-1">
        <p>r/${userName}</p>
        <span>Posted byu/42words 19 hours ago </span>
      </div>
      <div class="post-part-2">
        <p>${post.title}</p>
        <span>i.imgur.com/19xiHN... <i class="far fa-external-link"></i></span>
      </div>
      
      <div class="post-part-3">
        <img src="${post.imageurl}" alt="">
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
    });
    console.log('ssssssssssssssssssssssssssss');
  });
