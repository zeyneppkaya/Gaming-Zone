// Functions

// Variables for cart functionalities --  Juan Camilo Cardona
const ls = window.localStorage.getItem('cart')
let storedGames = ls ? JSON.parse(ls) : []
let titles = storedGames ? storedGames.map(item => item.name) : []
const $cart = document.querySelector('.cart')
const $cartWindow = document.querySelector('.cart-window')
const $cartbtn = document.getElementById('cartbtn')
const $gameItem = document.querySelectorAll('.game')
const $cartWrapper = document.querySelector('.cart-wrapper')
const $subtotal = document.querySelector('.subtotal')
const $clearCart = document.querySelector('.clear')

// Render cart with games stored in local storage --  Juan Camilo Cardona
renderCart(storedGames)

const $remove = document.querySelectorAll('.cancel')

// Adds game to cart --  Juan Camilo Cardona
function buyGame (e) {
  const game = e.target.closest('.game')
  const data = JSON.parse(game.dataset.info)
  if (e.target.matches('i')) {
    $cartWrapper.prepend(createGame(data))
    storedGames.push(data)
    calculatePrice(storedGames)
    titles.push(data.name)
    window.localStorage.setItem('cart', JSON.stringify(storedGames))
  }
  if ($cart.classList.contains('visible')) {
    $cart.classList.toggle('visible')
  }
}

// Add functionality to delete games from cart --  Juan Camilo Cardona
function removeGame (e) {
  storedGames.splice(titles.indexOf(e.target.dataset.title), 1)
  titles.splice(titles.indexOf(e.target.dataset.title), 1)
  $cartWrapper.innerHTML = ''
  window.localStorage.setItem('cart', JSON.stringify(storedGames))
  renderCart(storedGames)
}

// render cart when page loads --  Juan Camilo Cardona
function renderCart (array) {
  array.forEach(game => {
    $cartWrapper.prepend(createGame(game))
  })
  calculatePrice(array)
}

// calculate subtotal --  Juan Camilo Cardona
function calculatePrice (array) {
  let subtotal = 0
  $subtotal.textContent = 'Subtotal: $0.00'
  array.forEach(item => {
    if (item.price.startsWith('$')) {
      let price_regex = parseFloat(item.price.replace(/[*^$USD ]/g, ''))
      subtotal += price_regex
      $subtotal.textContent = `Subtotal: $${subtotal.toFixed(2)}`
    }
  })
}

// Function create game in cart --  Juan Camilo Cardona
function createGame (game) {
  const $cartItem = document.createElement('div')
  $cartItem.classList.add('cart-item')
  const $cartImg = document.createElement('img')
  $cartImg.setAttribute('src', game.img)
  const $itemInfo = document.createElement('div')
  $itemInfo.classList.add('item-info')
  const $gameName = document.createElement('p')
  $gameName.textContent = game.name
  const $gamePrice = document.createElement('p')
  $gamePrice.textContent = game.price
  const $cancel = document.createElement('div')
  $cancel.classList.add('cancel')
  const $cancelImg = document.createElement('img')
  $cancelImg.setAttribute('src', '/pics/delete-left-solid.svg')
  $cancelImg.dataset.title = game.name
  $cancelImg.dataset.price = game.price
  $cancelImg.addEventListener('click', removeGame)
  $cancel.append($cancelImg)
  $itemInfo.append($gameName, $gamePrice)
  $cartItem.append($cartImg, $itemInfo, $cancel)
  return $cartItem
}

// Function to clear cart --  Juan Camilo Cardona
function clearCart () {
  $cartWrapper.innerHTML = ''
  titles = []
  storedGames = []
  $subtotal.textContent = 'Subtotal: $0.00'
  window.localStorage.removeItem('cart')
}

// Make cart visible --  Juan Camilo Cardona
$cartbtn.addEventListener('click', function (e) {
  $cart.classList.toggle('visible')
})

// Add game info into data attribute for each game --  Juan Camilo Cardona
for (let i = 0; i < games.length; i++) {
  $gameItem[i].dataset.info = JSON.stringify(games[i])
  $gameItem[i].addEventListener('click', buyGame)
}

// Add event listener to clearCart button --  Juan Camilo Cardona
$clearCart.addEventListener('click', clearCart)
