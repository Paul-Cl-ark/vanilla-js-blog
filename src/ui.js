class UI {
  constructor () {
    this.posts = document.querySelector('#posts')
    this.title = document.querySelector('#body')
    this.submit = document.querySelector('.post-submit')
  }

  showPosts (posts) {
    this.posts.innerHTML = posts.map(post => `
      <div class="card mb-3">
        <h4 class="card-header">${post.title}</h4>
        <div class="card-body">${post.body}</div>
      </div>
    `)
    .join('');
  }
}

export const ui = new UI()
