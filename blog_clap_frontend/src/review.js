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

  divReviews.append(p)

}


const panelBody = document.querySelector('.panel-body')

panelBody.addEventListener('click', (e)=> {

  const btnBlogClap = document.querySelector('.btnBlogClap')
  const newClap = document.querySelector('#new_clap')
  let clap = parseInt(newClap.innerText, 10)

  if (e.target === btnBlogClap){
      newClap.innerText = ++ clap
  }

})

