myFetch(urlBlog)
.then(blogsObj => {
  for(const blog of blogsObj){
    showBlogs(blog)
  }

})

const divBlogs = document.querySelector('.blogsList')

function showBlogs(blog){

}

// <p>
// <span class="label label-default">Blog 1</span>
// <span class="label label-primary">Blog 2</span>
// <span class="label label-success">Blog 3</span>
// <span class="label label-info">Blog 4</span>
// <span class="label label-warning">Blog 5</span>
// <span class="label label-danger">Blog 6</span>
// </p>
