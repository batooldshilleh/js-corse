const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting , name , emoje) {
    welcomeEl.textContent = ` ${greeting}  ${name} ${emoje}`
}

greetUser("ora Luffy","kizokone ori wa naro","☠")
