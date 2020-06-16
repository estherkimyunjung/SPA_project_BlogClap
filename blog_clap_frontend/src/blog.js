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
}

{/* <div class="well blogIFrame">
<!-- <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"> -->
<!-- </iframe> -->
</div> */}

function iframe(blog, a){
  a.addEventListener('click', () => {
    iFrameLink.innerHTML = ''
    const h3 = document.createElement('h3')
    h3.innerText = blog.title
    const iFrame = document.createElement('iframe')
    iFrame.src = blog.link
    const p = document.createElement('p')
    p.innerText = blog.description
    iFrameLink.append(h3, iFrame, p)
  })
}






// const options = makeOptions('POST', {title: title, link: link, description: description})

/* <div id="home" class="tab-pane fade in active">
<h3>img/link</h3>
<div class="col-sm-12">
  <div class="well">
    <!-- <img src="bandmember.jpg" class="img-circle" height="55" width="55" alt="Avatar"> -->

  </div>
  <p>description</p>
  <p>liks</p>
  <p>comments</p>
</div>
</div>
</div> */
