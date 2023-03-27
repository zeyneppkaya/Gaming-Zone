const $form = document.querySelector('.search')
const $input = document.querySelector('[type=text]')
const $news = document.querySelector('.news-container')
const $dateFrom = document.getElementById('dateFrom')
const $dateTo = document.getElementById('dateTo')
const $select = document.querySelector('select')
const apiKey = '5111783a90a34205ab50bcc2b3c73add'

$dateTo.addEventListener('change', addDateTo)
$dateFrom.addEventListener('change', addDateFrom)
$select.addEventListener('change', addCriteria)

let DateTo = ''
let DateFrom = ''
let Criteria = $select.value

function addDateTo (e) {
  DateTo = e.target.value
  $news.innerHTML = ''
  fetchNews(constructURL())
  return DateTo
}

function addDateFrom (e) {
  DateFrom = e.target.value
  $news.innerHTML = ''
  fetchNews(constructURL())
  return DateFrom
}

function addCriteria (e) {
  Criteria = e.target.value
  $news.innerHTML = ''
  fetchNews(constructURL())
  return Criteria
}

window.addEventListener('load', defaultNews)

$form.addEventListener('submit', retrieve)

function defaultNews () {
  let url = `https://newsapi.org/v2/everything?q=video+games&sortBy=relevancy&language=en&apiKey=${apiKey}`
  fetchNews(url)
}

function retrieve (e) {
  e.preventDefault()
  $news.innerHTML = ''
  fetchNews(constructURL())
}

function fetchNews (url) {
  fetch(url).then(res => {
    return res.json()
  }).then(data => {
    console.log(data)
    data.articles.slice(0, 6).forEach(article => createNews(article))
  }).catch(error => {
    console.log(error)
  })
}

function createNews (article) {
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
}

function constructURL () {
  let url = 'https://newsapi.org/v2/everything?'
  // criteria is always defined
  // check for dateto
  if ($input.value) {
    url += `q=video+games+${$input.value}&language=en`
  } else {
    url += 'q=video+games&language=en'
  }
  if (DateTo) {
    url += `&to=${DateTo}`
  }
  if (DateFrom) {
    url += `&from=${DateFrom}`
  }
  return url + `&sortBy=${Criteria}&apiKey=${apiKey}`
}
