// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
let inputBtn = document.getElementById("input-btn")
const myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
})

function renderLeads() {
    let listItems = []
    for(let i = 0; i < myLeads.length; i++){
    /* const li =document.createElement("li")
        li.textContent =myLeads[i]
        ulEl.append(li)*/
        listItems += `
        <li> 
            <a href = ' ${myLeads[i]}' target='_blank'>
              ${myLeads[i]} 
            </a>
        </li> 
        `
    }

    ulEl.innerHTML = listItems
}