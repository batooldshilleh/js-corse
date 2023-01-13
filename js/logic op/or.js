let likesDocumentaries = true
let likeStartups = false

function orFun(){
    if(likeStartups === false || likesDocumentaries === true){
        recommendMovie()
    }
}
function recommendMovie(){
    console.log("😍😎")
}

orFun()