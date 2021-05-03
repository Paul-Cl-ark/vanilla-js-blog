import { ui } from './ui'

const getPosts = async () => {
  const posts = await fetch('http://localhost:3000/posts')
    .then(res => res.json())

  return ui.showPosts(posts)
}

document.addEventListener('DOMContentLoaded', getPosts);

