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

createBlogger()
function createBlogger(){

    const bloggerForm = document.createElement('FORM')
    const input = document.createElement('INPUT')
    input.type = "text"
    input.placeholder = "Add a blogger..."
    const bloggerBtn = document.createElement('button')
    bloggerBtn.innerText = "submit"
    divBloggers.append(bloggerForm)
    bloggerForm.append(input, bloggerBtn)

    bloggerSubmitEvent(divBloggers, bloggerForm, input)
  }


function bloggerSubmitEvent(divBloggers, bloggerForm, input){

  bloggerForm.addEventListener('submit', e => {

  e.preventDefault();
  const a = document.createElement('p');
  a.innerText = input.value;
  divBloggers.append(a);
  const newBlogger = input.value;
  const options = makeOptions('POST', {name: newBlogger})
  
  myFetch(urlBlogger, options)
  bloggerForm.reset();
  
  })
}

