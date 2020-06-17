myFetch(urlBlog)
.then(blogsObj => {
  for(const blog of blogsObj){
    showBlogs(blog)
  }
})


function showBlogs(blog){
  const divBlogs = document.querySelector('.blogsList')
  const ulNavTab = document.querySelector('.nav-tabs')

  const p = document.createElement('p')
  const span = document.createElement('span')
  span.classList.add('label', 'label-primary', 'spanBlogList')
  span.innerText = `Blog ${blog.id} :  "${blog.title}"`
  p.append(span)
  divBlogs.append(p)

  const li = document.createElement('li')
  const a = document.createElement('a')
  a.setAttribute("data-toggle", "tab")
  // a.setAttribute("href", `#menu${blog.id}`)
  a.innerText = `Blog ${blog.id}`
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
    aLink.href = blog.link
    aLink.innerText = blog.title

    const p = document.createElement('p')
    p.innerText = blog.description

    h4.append(aLink)
    blockquote.append(h4, p)
    divIFrameLink.append(blockquote)

    const btnBlogDelete = document.createElement('button')
    callBtnBlogDelete(blog, divIFrameLink, a, btnBlogDelete)
    createBtnBlogClap(divBlogInfo, divIFrameLink, btnBlogDelete)
  })
}


function callBtnBlogDelete(blog, divIFrameLink, a, btnBlogDelete){
  btnBlogDelete.innerText = 'Delete Blog'
  const pReview = document.querySelector('.pReveiwList')
  const spanBlog = document.querySelector('.spanBlogList')

  btnBlogDelete.addEventListener('click', () => {
    myFetch(`${urlBlog}/${blog.id}`, {method: 'DELETE'})
    .then(() => {
      divIFrameLink.remove()
      a.remove()
      
      spanBlog.remove()
      pReview.remove()
    })
  })
}


function createBtnBlogClap(divBlogInfo, divIFrameLink, btnBlogDelete){
  const btnBlogClap = document.createElement('button')
  btnBlogClap.className = 'btnBlogClap'
  btnBlogClap.innerText = '👏 Clap'
  divBlogInfo.append(divIFrameLink, btnBlogClap, ` `, btnBlogDelete)
}
