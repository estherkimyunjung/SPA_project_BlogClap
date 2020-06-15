const urlBlogger = 'http://localhost:3000/bloggers'
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
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  }
}

myFetch(urlBlogger)
.then(bloggersObj => {
  for(const blogger of bloggersObj){
    showBloggers(blogger)
  }

})

const divBloggers = document.querySelector('.bloggersList')

function showBloggers(blogger){

  const h5 = document.createElement('h5')
  h5.innerText = blogger.name
  divBloggers.append(h5)
}
