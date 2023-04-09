//clear name error message 
document.querySelector("#name").addEventListener("click", function() {
    document.querySelector("#nameError").textContent = "";
})

//clear email error message
document.querySelector("#email").addEventListener("click", function() {
    document.querySelector("#emailError").textContent = "";
})

//clear message error message
document.querySelector("#message").addEventListener("click", function() {
    document.querySelector("#messageError").textContent = "";
})