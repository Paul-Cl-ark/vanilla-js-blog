import { ui } from './ui';

const getPosts = async () => {
  const posts = await fetch('http://localhost:3000/posts')
    .then(res => res.json());

    return ui.showPosts(posts);
  }
  
document.addEventListener('DOMContentLoaded', getPosts);

const submitPost = () => {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  })
    .then(() => {
      ui.clearFields();
      getPosts();
    })
    .catch(err => console.log(err));
}

const deletePost = (e) => {
  const isDelete = e.target.classList.contains('delete');
  const id = e.target.dataset.id;
  if (isDelete && id) {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    })
    .then(() => getPosts())
    .catch(err => console.log(err));
  };
  e.preventDefault();
};

const enablePostEdit = (e) => {
  const isEdit = e.target.classList.contains('edit');
  const id = e.target.dataset.id;
  
  if (isEdit && id) {
    const title = e.target.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.previousElementSibling.textContent;
    
    const data = { id, title, body };

    ui.fillForm(data);
  }
  
  e.preventDefault();
}

document.querySelector('#post-submit-btn')
  .addEventListener('click', submitPost);

document.querySelector('#posts')
  .addEventListener('click', deletePost);

document.querySelector('#posts')
  .addEventListener('click', enablePostEdit);
