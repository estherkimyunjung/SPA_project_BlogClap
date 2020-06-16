// myFetch(urlReview)
// .then(reviewsObj => {
//   // for(const review of reviewsObj){
//   //   return console.log(review)
//   // }
//   console.log(reviewsObj)
// })


  // const btnBlogClap = document.querySelector('btnBlogClap')

  // btnBlogClap.addEventListener('click', () => {
  //   console.log("TEST")
  //   const clapCount = document.createElement('span');
  //   // clapCount.innerText = 
  //   let clap = parseInt(clapCount.textContent, 10);
  //   btnBlogClap.append(clapCount)

  //   const options = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       clap: ++clap
  //     })
  //   };
  //   myFetch(urlReview, options)
  //     .then(json => {
  //       console.log(json)
  //       // clapCount.textContent = review.clap;
  //   })
  // })

  const panelBody = document.querySelector('.panel-body')
  panelBody.addEventListener('click', (e)=> {
    // console.log('click')
  const btnBlogClap = document.querySelector('.btnBlogClap')
  // console.log(e.target)
    if (e.target === btnBlogClap){
      const clap = document.createElement('span')
      // clap.innerText = 

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
        myFetch(urlReview)
        .then(
          console.log       
        )
    }
  })
