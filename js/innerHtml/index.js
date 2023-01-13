let container = document.getElementById("container")

container.innerHTML = "<button onclick = 'buy()'> Buy</button>"

function buy(){
    container.innerHTML += "<br> <br>" + "Thank you for buying!"
}