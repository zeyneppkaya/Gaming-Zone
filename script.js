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
function slider(picture) {
    $gamePoster.src = picture;
    $gamePoster.classList.add('.game-pics')
}

// Changes the circle's color everytime picture changes
function changer(logo, href, state, description, price) {
    $gameLogo.src = logo;
    $gameLink.href = href;
    $gameState.textContent = state;
    $gameDescription.textContent = description;
    $gamePrice.textContent = price;
}

function logoResizer(maxWidth) {
    $gameLogo.style.maxWidth = maxWidth
}

function buyButton(text) {
    $buyButton.textContent = text
}

// Finish

//make nav responsive
const navBar = document.querySelector('.nav-bar')
const toggleBtn = document.querySelector('.toggle-btn')

toggleBtn.addEventListener('click', function () {
    navBar.classList.toggle('show')
})

// Validate form 

function validateForm() {
    var result = true;
    const name = document.contactForm.name.value;
    const email = document.contactForm.email.value;
    const message = document.contactForm.message.value;

    //validate user name 
    if (name == "") {
        document.querySelector("#nameError").textContent =
            "Please enter a name";
        result = false;
    }

    if (!email.includes("@")) {
        document.querySelector("#emailError").textContent =
            "Invalid E-mail format.";
        result = false;
    }

    if (message == "") {
        document.querySelector("#messageError").textContent =
            "Please enter a message.";
        result = false;
    }

    return result;
}

function validateEmailForm() {
    let result = true;
    const signinEmail = document.signinForm.email.value;
    const signinPassword = document.signinForm.password.value;

    if (!signinEmail.includes("@")) {
        document.querySelector('#mailError').textContent =
            "Invalid E-mail format.";
        result = false;
    }

    if (signinPassword == "") {
        document.querySelector('#passError').textContent =
            "Password cannot be empty.";
        result = false;
    }

    //clear email error message
    document.querySelector(".email").addEventListener("click", function () {
        document.querySelector("#mailError").textContent = "";
    })

    //clear password error message
    document.querySelector(".password").addEventListener("click", function () {
        document.querySelector("#passError").textContent = "";
    })

    return result;
}

const form = document.getElementById('contactForm');
const success = document.getElementById('received');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const userEmail = window.localStorage.getItem('email');
    const name = document.contactForm.name.value;

    if (userEmail) {
        success.textContent = "Thank you for contacting us! We received your message and will contact you soon,  " + userEmail + "!";
        console.log(email);
    } else if (!userEmail && name == "") {
        success.textContent = ""
    } else {
        success.textContent = "Thank you for contacting us! We received your message and will contact you soon, " + name + "!";
    }

    form.reset();
})