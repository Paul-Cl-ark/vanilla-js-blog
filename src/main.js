import { ui } from './ui';

const basePath = 'http://localhost:3000/posts/'

const getPosts = async () => {
  const posts = await fetch(basePath).then(res => res.json());
  
  return ui.showPosts(posts);
};

const submitPost = () => {
  const title = ui.title.value
  const body = ui.body.value;
  const id = ui.id.value;
  
  fetch(`${basePath}${id}`, {
    method: id ? 'PUT' : 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  })
  .then(() => {
    ui.resetFormState();
    getPosts();
  })
  .catch(err => console.log(err));
};

const deletePost = (e) => {
  const isDelete = e.target.classList.contains('delete');
  const id = e.target.dataset.id;
  
  if (isDelete && id) {
    fetch(`${basePath}${id}`, { method: 'DELETE' })
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
        
    ui.fillForm({ id, title, body });
  }
  
  e.preventDefault();
}

const cancelEdit = (e) => {
  const isCancel = e.target.id === 'post-cancel-button';
  if (isCancel) ui.resetFormState();
  
  e.preventDefault();
};

document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('#post-submit-btn')
  .addEventListener('click', submitPost);
document.querySelector('#posts')
  .addEventListener('click', deletePost);
document.querySelector('#posts')
  .addEventListener('click', enablePostEdit);
document.querySelector('.card-form')
  .addEventListener('click', cancelEdit);
