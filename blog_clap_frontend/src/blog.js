myFetch(urlBlog)
.then(blogsObj => {
  for(const blog of blogsObj){
    showBlogs(blog)
  }

})

const divBlogs = document.querySelector('.blogsList')
const ulNavTab = document.querySelector('.nav-tabs')
const iFrameLink = document.querySelector('.blogIFrame')

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
    iFrameLink.innerHTML = ''
    const h3 = document.createElement('h3')
    h3.innerText = blog.title
    // const iFrame = document.createElement('iframe')
    // iFrame.src = blog.link
    const a = document.createElement('a')
    a.href = blog.link
    a.innerText = 'Link'
    const p = document.createElement('p')
    p.innerText = blog.description
    // iFrameLink.append(h3, iFrame, p)
    iFrameLink.append(h3, a, p)
  })
}


// const options = makeOptions('POST', {title: title, link: link, description: description})

