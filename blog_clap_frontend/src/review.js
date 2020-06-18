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
  const btnReviewDelete = document.createElement('button')
  btnReviewDelete.className = 'reviewDelet'
  btnReviewDelete.dataset.blogId = review.relationships.blog.data.id
  btnReviewDelete.innerText = 'Delete ^ Review'

  btnReviewDeleteEvent(p, review, btnReviewDelete)
  divReviews.append(p, btnReviewDelete)
}


function btnReviewDeleteEvent(p, review, btnReviewDelete){

  btnReviewDelete.addEventListener('click', () => {

    let clapNum = document.querySelector('.clapCount')
    myFetch(`${urlReview}/${review.id}`, {method: 'DELETE'})
    .then((review) => {
      p.remove()

      if (clapNum && parseInt(clapNum.dataset.blogId) === review.blog_id){
        let num = parseInt(clapNum.innerText) - review.clap
        clapNum.innerText = num
      }
      btnReviewDelete.remove()
    })
  })
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

