const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div')
  const dateSp = document.createElement('span')
  const titleH1 = document.createElement('h1')
  const tempSp = document.createElement('span')

  header.appendChild(dateSp)
  header.appendChild(titleH1)
  header.appendChild(tempSp)

  header.classList.add('header')
  dateSp.classList.add('date')
  tempSp.classList.add('temp')

  dateSp.textContent = date
  tempSp.textContent = temp
  titleH1.textContent = title

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const css = document.querySelector(`${selector}`)
  css.appendChild(Header('Lambda Times', '2/19/2021', 'temp'))
}

export { Header, headerAppender }
