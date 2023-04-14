// Functions

// Variables for featured Games display --  Zeynep Kaya
const $gamePoster = document.querySelector('.game-pics')
const $gameLogo = document.querySelector('.hl-logo')
const $gameDescription = document.querySelector('.description')
const $gamePrice = document.querySelector('.price')
const $gameLink = document.querySelector('.game-link')
const $gameState = document.querySelector('.out-now')
const $buyButton = document.querySelector('.buy-button')

// Slides images when clicked on thumbnails -- Zeynep Kaya
function slider (picture) {
  $gamePoster.src = picture
  $gamePoster.classList.add('.game-pics')
}

// Changes the information of logo href description and price of the game based on the selected feature game -- Zeynep Kaya
function changer (logo, href, state, description, price) {
  $gameLogo.src = logo
  $gameLink.href = href
  $gameState.textContent = state
  $gameDescription.textContent = description
  $gamePrice.textContent = price
}

// Changes the logo size if needed -- Zeynep Kaya
function logoResizer (maxWidth) {
  $gameLogo.style.maxWidth = maxWidth
}

// Changes the buy button depending on whether the game is free or not -- Zeynep Kaya 
function buyButton (text) {
  $buyButton.textContent = text
}

//make nav responsive
const navBar = document.querySelector('.nav-bar')
const toggleBtn = document.querySelector('.toggle-btn')

toggleBtn.addEventListener('click', function () {
  navBar.classList.toggle('show')
})

// Validate contact us form -- Zeynep Kaya 
function validateForm() {
    var result = true;
    const name = document.contactForm.name.value;
    const email = document.contactForm.email.value;
    const message = document.contactForm.message.value;

    //validates user name 
    if (name == "") {
        document.querySelector("#nameError").textContent =
            "Please enter a name";
        result = false;
    }

    // Validates Email
    if (!email.includes("@")) {
        document.querySelector("#emailError").textContent =
            "Invalid E-mail format.";
        result = false;
    }

    // Validates Message form
    if (message == "") {
        document.querySelector("#messageError").textContent =
            "Please enter a message.";
        result = false;
    }

    return result;
}

// Validates Sign in page form -- Zeynep Kaya
function validateEmailForm() {
    let result = true;
    const signinEmail = document.signinForm.email.value;
    const signinPassword = document.signinForm.password.value;

    // Validates Email format
    if (!signinEmail.includes("@")) {
        document.querySelector('#mailError').textContent =
            "Invalid E-mail format.";
        result = false;
    }

    // Validates password
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

// Contact us 'message recevied' Message -- Zeynep Kaya
const form = document.getElementById('contactForm');
const success = document.getElementById('received');

if (form) {form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userEmail = window.localStorage.getItem('email');
  const name = document.contactForm.name.value;

  // If the user is logged in thank you message is regarded to user's email 
  if (userEmail) {
      success.textContent = "Thank you for contacting us! We received your message and will contact you soon,  " + userEmail + "!";
      console.log(userEmail);
  // if you user is not logged in nor entered a name nothing will appear 
  } else if (!userEmail && name == "") {
      success.textContent = ""
  // if you user is not logged in but filled their name in the name section thank you message will be regard to their name. 
  } else {
      success.textContent = "Thank you for contacting us! We received your message and will contact you soon, " + name + "!";
      console.log('bitti')
  }

  form.reset();
})
}