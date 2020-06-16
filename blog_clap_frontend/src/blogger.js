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
