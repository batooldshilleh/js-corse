let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

let btn = document.getElementById("btn")

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
btn.addEventListener("click", function(){
    for(let i =0 ; i < data.length;i++){
        if (data[i]. player === "Jane"){
            console.log(data[i].score)
        }
    }
})