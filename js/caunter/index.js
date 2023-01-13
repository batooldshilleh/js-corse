
let count =0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count")

function incres(){
   count +=1 
   countEl.innerText = count


}


function save(){
   saveEl.textContent += count + " - " 
   console.log(count)
   count = 0
   countEl.innerText = 0
}