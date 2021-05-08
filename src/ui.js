class UI {
  constructor() {
    this.posts = document.querySelector('#posts');
    this.title = document.querySelector('#title');
    this.body = document.querySelector('#body');
    this.submit = document.querySelector('#post-submit-btn');
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
  }

  clearFields() {
    this.title.value = '';
    this.body.value = '';
  }

  fillForm({ id, title, body }) {
    this.title.value = title;
    this.body.value = body;
  }

}

export const ui = new UI();
