import { ui } from './ui';

const getPosts = async () => {
  const posts = await fetch('http://localhost:3000/posts')
    .then(res => res.json());

    return ui.showPosts(posts);
  }
  
document.addEventListener('DOMContentLoaded', getPosts);

const submitPost = async () => {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const postData = { title, body };

  const response = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(() => {
      ui.clearFields()
      getPosts();
    })
    .catch(err => console.log(err));
}

document.querySelector('#post-submit-btn')
  .addEventListener('click', submitPost);
