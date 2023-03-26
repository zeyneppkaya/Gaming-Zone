const $signIn = document.getElementById('signIn')
const $inOutBtn = document.getElementById('in-out')
const $inOut = document.getElementById('inOutBtn')

if ($signIn) {
    $signIn.addEventListener("submit", function () {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value  
       
        window.localStorage.setItem('email', email)
        window.localStorage.setItem('password', password)
       
    })
}

if (window.localStorage.getItem('email')){
    $inOut.value = "Sign Out"
}

$inOutBtn.addEventListener("submit", function () {
    if ($inOut.value === "Sign Out") {
        window.localStorage.clear()
    }
})

