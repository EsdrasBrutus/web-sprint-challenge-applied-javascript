import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div')
  const headline = document.createElement('headline')
  const author = document.createElement('div')
  const imgBox = document.createElement('div')
  const img = document.createElement('img')
  const name = document.createElement('span')

  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgBox.classList.add('img-container')

  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgBox)
  imgBox.appendChild(img)
  author.appendChild(name)

  headline.textContent = article.headline
  img.setAttribute('src', article.authorPhoto)
  name.textContent = article.authorName

  card.addEventListener('click', () =>{
    console.log(article.headline)
  })

  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const helper = (obj) =>{
    for (let i = 0; i < obj.length; i++){

    }
  }

  const css = document.querySelector(`${selector}`)
  const URL = `https://lambda-times-api.herokuapp.com/articles`
  axios.get(URL)
  .then(res =>{
    //console.log(res.data.articles)

    const javascript = res.data.articles.javascript
    
    const bootstrap = res.data.articles.bootstrap
    
    const technology = res.data.articles.technology
    
    const jquery = res.data.articles.jquery
    
    const node = res.data.articles.node
    
    console.log(javascript)
    javascript.forEach(element => {
      css.appendChild(Card(element))
    });

    bootstrap.forEach(element => {
      css.appendChild(Card(element))
    });

    technology.forEach(element => {
      css.appendChild(Card(element))
    });

    jquery.forEach(element => {
      css.appendChild(Card(element))
    });

    node.forEach(element => {
      css.appendChild(Card(element))
    });

      
  })

}

export { Card, cardAppender }
