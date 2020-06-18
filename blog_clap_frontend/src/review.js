myFetch(urlReview)
.then(reviewsObj => {
  for(const review of reviewsObj.data){
    showReviews(review)
  }
})

function showReviews(review){
  const divReviews = document.querySelector('.reviewList')
  const p = document.createElement('p')
  p.dataset.blogId = review.relationships.blog.data.id
  p.className = 'pReveiwList'
  p.innerText = `Blog ${review.relationships.blog.data.id} : "${review.attributes.comment}"  (Claps ${review.attributes.clap})`
  const a = document.createElement('a')
  a.setAttribute = ('id', `${review.id}`)
  p.append(a)
  divReviews.append(p)

  clapBlog(review)
}

function clapBlog(review){

  const panelBody = document.querySelector('.panel-body')
  
  panelBody.addEventListener('click', (e)=> {
   
    const btnBlogClap = document.querySelector('.btnBlogClap')
    const spanClap = document.querySelector(`.clapCount[data-blog-id="${review.id}"]`)
    console.log("SPANCOUNT", spanClap.innerText)
    console.log("DATACLAP", review.attributes.clap)
    let clap = parseInt(spanClap.innerText, 10)
  
    if (e.target === btnBlogClap){
  
        const options = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clap: ++ clap
          })
        };
        myFetch(`${urlReview}/${review.id}`, options)
        .then( reviewsObj => {
          console.log("PATCH", reviewsObj)
          }
        )
    }
  })
}  
