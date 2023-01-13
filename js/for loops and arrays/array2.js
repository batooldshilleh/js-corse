let sentence = ["Hello","i","am","monky.D.luffy"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0 ; i < sentence.length; i++){
    greetingEl.textContent += " " + sentence[i]
}