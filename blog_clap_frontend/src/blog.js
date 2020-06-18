myFetch(urlBlog)
.then(blogsObj => {
  for(const blog of blogsObj.data){
    showBlogs(blog)
  }
})


function showBlogs(blog){

  const divBlogs = document.querySelector('.blogsList')
  const ulNavTab = document.querySelector('.nav-tabs')

  const p = document.createElement('p')
  const span = document.createElement('span')
  span.classList.add('label', 'label-primary', 'spanBlogList')
  span.dataset.blogId = blog.id
  span.innerText = `Blog ${blog.id} :  "${blog.attributes.title}"`

  const li = document.createElement('li')
  const a = document.createElement('a')
  a.setAttribute("data-toggle", "tab")
  a.innerText = `Blog ${blog.id}`

  p.append(span)
  divBlogs.append(p)
  li.append(a)
  ulNavTab.append(li)

  iframe(blog, a)
}


function iframe(blog, a){

  const divBlogInfo = document.querySelector('.blogInfo')
  const divIFrameLink = document.querySelector('.blogIFrame')

  a.addEventListener('click', () => {

    divIFrameLink.innerHTML = ''
    divBlogInfo.innerHTML = ''

    const panelBody = document.querySelector('.panel-body')
    const blockquote = document.createElement('blockquote')
    blockquote.className = 'embedly-card'

    const h4 = document.createElement('h4')

    const aLink = document.createElement('a')
    aLink.href = blog.attributes.link
    aLink.innerText = blog.attributes.title

    const p = document.createElement('p')
    p.innerText = blog.attributes.description

    h4.append(aLink)
    blockquote.append(h4, p)
    divIFrameLink.append(blockquote)

    const btnBlogDelete = document.createElement('button')
    BlogDelete(blog, divIFrameLink, a, btnBlogDelete)

    const h3Clap = document.createElement('h3')
    h3Clap.dataset.blogId = blog.id
    h3Clap.className = 'clapCount'
    h3Clap.innerText = blog.attributes.clap
    BlogClap(blog, divBlogInfo, divIFrameLink, h3Clap, btnBlogDelete)
  })
}


function BlogDelete(blog, divIFrameLink, a, btnBlogDelete){

  btnBlogDelete.innerText = 'Delete Blog'
  const blogInfo = document.querySelector('.blogInfo')
  const pReview = document.querySelector(`p[data-blog-id="${blog.id}"]`)
  const spanBlog = document.querySelector(`span[data-blog-id="${blog.id}"]`)

  BlogDeleteEvent(btnBlogDelete, blog, divIFrameLink, a, spanBlog, pReview, blogInfo)
}


function BlogDeleteEvent(btnBlogDelete, blog, divIFrameLink, a, spanBlog, pReview, blogInfo){

  btnBlogDelete.addEventListener('click', () => {
    
    let btnRvDel = document.querySelector(`.reviewDelet[data-blog-id="${blog.id}"]`)
    
    myFetch(`${urlBlog}/${blog.id}`, {method: 'DELETE'})
    .then(() => {
      divIFrameLink.remove()
      a.remove()
      btnRvDel.remove()
      spanBlog.remove()
      pReview.remove()
      blogInfo.innerText = ''
    })
  })
}


function BlogClap(blog, divBlogInfo, divIFrameLink, h3Clap, btnBlogDelete){

  const newClap = document.createElement('span')
  newClap.id = 'new_clap'
  newClap.innerText = 0
  const btnBlogClap = document.createElement('button')
  btnBlogClap.dataset.blogId = blog.id
  btnBlogClap.className = 'btnBlogClap'
  btnBlogClap.innerText = '👏 Clap'

  const form = document.createElement('form')
  form.className = 'commnetForm'
  const labelComment = document.createElement('label')
  labelComment.innerText = 'Comment Here : '
  const inputComment = document.createElement('input')
  inputComment.dataset.blogId = blog.id
  inputComment.className = 'inputComment'
  inputComment.type = 'text'
  const btnSubmit = document.createElement('input')
  btnSubmit.dataset.blogId = blog.id
  btnSubmit.type = 'submit'
  form.append(labelComment,` `, inputComment, ` `, btnSubmit)

  blogClapEvent(form, blog)

  divBlogInfo.append(h3Clap, divIFrameLink, newClap,` `, btnBlogClap,` `, btnBlogDelete, form)
}

function blogClapEvent(form, blog){

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const comment = document.querySelector('.inputComment').value
    const newClap = document.querySelector('#new_clap').innerText
    const options = makeOptions('POST', {review: {blog_id: blog.id, blogger_id: 1, clap: newClap, comment: comment}})

    myFetch(urlReview, options)
    .then(reviewComment => {
        showReviews(reviewComment.data)
        const span = document.querySelector('.clapCount')
        span.innerText = blog.attributes.clap + reviewComment.data.attributes.clap
        const newClap = document.querySelector('#new_clap')
        newClap.innerText = 0
        form.reset()
    })
  })
}

