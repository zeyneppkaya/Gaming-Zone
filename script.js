// Functions

// Variables
$gamePoster = document.querySelector('.game-pics')
$gameLogo = document.querySelector('.hl-logo')
$gameDescription = document.querySelector('.description')
$gamePrice = document.querySelector('.price')
$gameLink = document.querySelector('.game-link')
$gameState = document.querySelector('.out-now')
$buyButton = document.querySelector('.buy-button')

// Slides other bakery images when clicked on thumbnails
function slider (picture){
    $gamePoster.src = picture;
    $gamePoster.classList.add('.game-pics')
}

// Changes the circle's color everytime picture changes
function changer (logo, href, state, description,price) {
    $gameLogo.src = logo;
    $gameLink.href = href;
    $gameState.textContent = state;
    $gameDescription.textContent = description;
    $gamePrice.textContent = price;
}

function logoResizer (maxWidth) {
    $gameLogo.style.maxWidth = maxWidth
}

function buyButton(text) {
    $buyButton.textContent = text
}
