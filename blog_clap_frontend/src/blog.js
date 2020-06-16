myFetch(urlBlog)
.then(blogsObj => {
  for(const blog of blogsObj){
    showBlogs(blog)
  }

})

const divBlogs = document.querySelector('.blogsList')
const ulNavTab = document.querySelector('.nav-tabs')
const divBlogInfo = document.querySelector('.blogInfo')
const divIFrameLink = document.querySelector('.blogIFrame')

function showBlogs(blog){
  const p = document.createElement('p')
  const span = document.createElement('span')
  span.classList.add('label', 'label-primary')
  span.innerText = blog.title
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

  
{/* <button type="button" class="btn btn-default btn-sm">
  👏 Clap
</button>
<button type="button" class="btn btn-default btn-sm">
  Delete the Blog
</button> */}

}

function iframe(blog, a){
  a.addEventListener('click', () => {
    divIFrameLink.innerHTML = ''
    divBlogInfo.innerHTML = ''


    const blockquote = document.createElement('blockquote')
    blockquote.className = 'embedly-card'
    const h4 = document.createElement('h4')
    const a = document.createElement('a')
    a.href = blog.link
    a.innerText = blog.title
    const p = document.createElement('p')
    p.innerText = blog.description
    h4.append(a)
    blockquote.append(h4, p)
    divIFrameLink.append(blockquote)

    const btnBlogDelete = document.createElement('button')
    btnBlogDelete.innerText = 'Delete Blog'
    const btnBlogClap = document.createElement('button')
    btnBlogClap.innerText = '👏 Clap'
    divBlogInfo.append(divIFrameLink, btnBlogClap, ` `, btnBlogDelete)
  
  })
}


// const options = makeOptions('POST', {title: title, link: link, description: description})

