class UI {
  constructor() {
    this.posts = document.getElementById('posts');
    this.title = document.getElementById('title');
    this.body = document.getElementById('body');
    this.id = document.getElementById('id');
    this.submit = document.getElementById('post-submit-btn');
  }

  showPosts(posts) {
    this.posts.innerHTML = posts.map(post => `
    <div class="card mb-3">
      <div class="card-body">
        <h4 class="card-title">${post.title}</h4>
        <p class="card-text">${post.body}</p>
        <a href="#" class="card-link edit" data-id="${post.id}">Edit</a>
        <a href="#" class="card-link delete" data-id="${post.id}">Delete</a>
      </div>
    </div>
    `)
    .join('');
  };
  
  clearFields() {
    this.id.value = '';
    this.title.value = '';
    this.body.value = '';
  };

  fillForm({ id, title, body }) {
    this.id.value = id;
    this.title.value = title;
    this.body.value = body;

    this.setEditFormState();
  };

  setEditFormState() {
    this.submit.firstElementChild.textContent= 'Update post';
    this.submit.className = this.submit.className.replace('primary', 'info');

    const cancelButton = document.createElement('button');
    cancelButton.id = 'post-cancel-button';
    cancelButton.className = 'btn-secondary btn-block btn-lg';

    const textSpan = document.createElement('span');
    textSpan.appendChild(document.createTextNode('Cancel'));
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-undo';
    
    cancelButton.appendChild(textSpan);
    cancelButton.appendChild(document.createTextNode(' '));
    cancelButton.appendChild(icon);

    const cardForm = document.querySelector('.card-form');
    cardForm.appendChild(cancelButton)
  };

  resetFormState() {
    this.submit.firstElementChild.textContent= 'Send it';
    this.submit.className = this.submit.className.replace('info', 'primary');

    const cancelButton = document.getElementById('post-cancel-button');
    if (cancelButton) cancelButton.remove();

    this.clearFields();
  };

};

export const ui = new UI();
