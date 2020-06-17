myFetch(urlReview)
.then(reviewsObj => {console.log(reviewsObj.data)
  for(const review of reviewsObj.data){
    showReviews(review)
  }
})

function showReviews(review){
  const divReviews = document.querySelector('.reviewList')
  const p = document.createElement('p')
  p.className = 'pReveiwList'
  p.innerText = `Blog ${review.relationships.blog.data.id} : "${review.attributes.comment}"  (Claps ${review.attributes.clap})`
  const a = document.createElement('a')
  a.setAttribute = ('id', `${review.id}`)
  p.append(a)
  divReviews.append(p)

  
const panelBody = document.querySelector('.panel-body')
// const spanClap = document.createElement('span')
// spanClap.innerText = review.attributes.clap
// panelBody.append(spanClap)

panelBody.addEventListener('click', (e)=> {
  // console.log('click')
const btnBlogClap = document.querySelector('.btnBlogClap')
// console.log(e.target)
  if (e.target === btnBlogClap){

    console.log('clap')

      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clap: 0
        })
      };
      myFetch(`${urlReview}/${review.id}`, options)
      .then(
        console.log       
      )
  }
})
}