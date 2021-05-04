class UI {
  constructor () {
    this.posts = document.querySelector('#posts')
    this.title = document.querySelector('#body')
    this.submit = document.querySelector('.post-submit')
  }

  showPosts (posts) {
    this.posts.innerHTML = posts.map(post => `
    <div class="card mb-3">
      <div class="card-body">
        <h4 class="card-title">${post.title}</h4>
        <p class="card-text">${post.body}</p>
        <a href="#" class="card-link" data-id="${post.id}">Edit</a>
        <a href="#" class="card-link" data-id="${post.id}">Delete</a>
      </div>
    </div>
    `)
    .join('');
  }
}

export const ui = new UI()
