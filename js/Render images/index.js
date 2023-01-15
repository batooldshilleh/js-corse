// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "imgg/1.jpg",
    "imgg/2.jpg",
    "imgg/11.jpg"
]

let imeges = document.getElementById("container")
function imgGenaret(arr){
    let innerhimg = ""
    for (let i =0; i < arr.length;i++){
        innerhimg += `<img class="team-img" src = "${arr[i]}">`
    }

    imeges.innerHTML = innerhimg
    
}

imgGenaret(imgs)