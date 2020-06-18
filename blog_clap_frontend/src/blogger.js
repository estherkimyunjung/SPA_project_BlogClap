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

  const bloggerForm = document.createElement('FORM')
  bloggerForm.class = "comment-form"
  bloggerForm.method = "POST"
  const input = document.createElement('INPUT')
  input.type = "text"
  input.placeholder = "Add a blogger..."
  const bloggerBtn = document.createElement('button')
  bloggerBtn.textContent = "submit"
  divBloggers.append(bloggerForm)
  bloggerForm.append(input, bloggerBtn)

  bloggerForm.addEventListener('submit', e => {
    e.preventDefault();
    const a = document.createElement('p');
    a.innerText = input.value;
    divBloggers.append(a);
    const newBlogger = input.value;
    console.log(newBlogger);
    const options = makeOptions('POST', {name: newBlogger})
    
    
    myFetch(urlBlogger, options)
      
    bloggerForm.reset();
  })



// const bloggerForm = document.createElement('FORM')
// bloggerForm.class = "comment-form"
// bloggerForm.method = "POST"
// const input = document.createElement('INPUT')
// input.type = "text"
// input.placeholder = "Add a blogger..."
// const bloggerBtn = document.createElement('button')
// bloggerBtn.textContent = "submit"
// divBloggers.append(bloggerForm)
// bloggerForm.append(input, bloggerBtn)

// bloggerForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const a = document.createElement('p');
//   a.innerText = input.value;
//   divBloggers.append(a);
//   bloggerForm.reset();
//   const bloggersArray = blogger
//   bloggersArray.push(a)
//   const option = {
//     method: 'POST',
//     headers:{
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//       bloggers: bloggersArray
//     })
//   }
//   myFetch('${urlBlogger}/${blogger.id}', option)
//   .then(blogger =>{
//     showBloggers(blogger);
//   })

// })
