const $form = document.querySelector('.search')
const $input = document.querySelector('.input')
const $news = document.querySelector('.container')

$form.addEventListener('submit', retrieve)

function retrieve (e) {
  // This should be an environment variable
  e.preventDefault()
  $news.innerHTML = ''
  if ($input.value === '') {
    alert('Input field is empty')
    return
  }
  const apiKey = '5111783a90a34205ab50bcc2b3c73add'
  let newsTopic = $input.value
  let url = `https://newsapi.org/v2/everything?q=${newsTopic}&apiKey=${apiKey}`

  fetch(url).then(res =>{
    return res.json()
  }).then(data => {
    console.log(data)
    data.articles.slice(0, 5).forEach(article => {
      const $box = document.createElement('div')
      $box.classList.add('box')
      const $meta1 = document.createElement('h3')
      $meta1.classList.add('meta')
      const $meta2 = document.createElement('h3')
      $meta2.classList.add('meta')
      const $desc = document.createElement('p')
      $desc.classList.add('description')
      const $anchor = document.createElement('a')
      $anchor.classList.add('anchor')
      const $img = document.createElement('img')
      $meta1.textContent = `${article.title} by ${article.author}`
      $meta2.textContent = `Publisher: ${article.source.name} (${article.publishedAt.slice(0, 10)})`
      $img.setAttribute('src', article.urlToImage)
      $anchor.appendChild($img)
      $anchor.setAttribute('href', article.url)
      $desc.textContent = article.description
      $box.append($meta1, $meta2, $anchor, $desc)
      $news.append($box)
    })
  }).catch(error => {
    console.log(error)
  })
}

// Search by top - headlines

// Search by:
// q - keywords
// searchIn: title, description, content
// sources
// domains
// excludeDomains
// from
// to
// language
// sortBy - relevancy, popularity, plubishedAt
// pageSize: max, dflt - 100
