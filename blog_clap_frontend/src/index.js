const urlBlogger = 'http://localhost:3000/bloggers'
const urlBlog = 'http://localhost:3000/blogs'
const urlReview = 'http://localhost:3000/reviews'

function myFetch(url, options={}){
  return fetch(url, options)
  .then(res => res.json())
}

function makeOptions(method, body){
  return{
    method: method,
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Security-Policy': 'frame-ancestors https://medium.com',
      // 'Content-Security-Policy': 'default-src https://medium.com',
      // 'Content-Security-Policy': `default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.medium.com`,
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  }
}
