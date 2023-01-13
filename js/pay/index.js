// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let ptonEl = document.getElementById("error")

function printm(){
    let message = "Something went wrong, please try again"
    ptonEl.innerText = message
}