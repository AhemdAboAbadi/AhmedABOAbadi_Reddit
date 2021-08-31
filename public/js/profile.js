const yourNameSpan = document.querySelector('.your-name-span');
const yourEmailSpan = document.querySelector('.your-email-span');
fetch('/profileUser')
  .then((response) => response.json())
  .then((data) => {
    if (document.cookie !== '') {
      yourEmailSpan.textContent = data.rows[0].email;
      yourNameSpan.textContent = data.rows[0].username;
    } else {
      console.log('error');
    }
  });
