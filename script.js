const scissor = document.querySelector(".scissors") 
const rock =   document.querySelector(".rock")
const paper = document.querySelector(".paper")
const result = document.querySelector(".result")
const computerchoice = document.querySelector(".computerchoice")
const userchoice = document.querySelector(".userchoice")
const usercounter = document.querySelector(".usercounter")
const compcounter =  document.querySelector(".compcounter")



// function to genrate a randome choice for rock paper scissor
let b = null
function RPS(){
    let a = Math.random()
    if (a<0.333){
        return b = "scissor"
    }
    else if (a>0.333 && a<0.666){
        return b =  "rock"
    }
    else{
        return b = "paper"
    }
}


// for user Selection

function userselection(){
    rock.addEventListener("click",function(){
        let c = "rock"
        RPS()
        computerchoice.innerHTML = `<h2>${b}</h2>`
        userchoice.innerHTML = `<h2>${c}</h2> `
        start(c,b)
        usercounter.innerHTML = `<h3>user:${usercount}</h3>`
        compcounter.innerHTML = `<h3>Computer:${compcount}</h3>`
        return c
    })
    scissor.addEventListener("click",function(){
        let c = "scissor"
        RPS()
        computerchoice.innerHTML = `<h2>${b}</h2>`
        userchoice.innerHTML = `<h2>${c}</h2> `
        start(c,b)
        usercounter.innerHTML = `<h3>user:${usercount}</h3>`
        compcounter.innerHTML = `<h3>Computer:${compcount}</h3>`
        return c

    })
    paper.addEventListener("click",function(){
        let c = "paper"
        RPS()
        computerchoice.innerHTML = `<h2>${b}</h2>`
        userchoice.innerHTML = `<h2>${c}</h2>`
        start(c,b)
        usercounter.innerHTML = `<h3>user:${usercount}</h3>`
        compcounter.innerHTML = `<h3>Computer:${compcount}</h3>`
        return c
    })
}

userselection()
 
// for checking the user and computer inputes and also giving them score

let usercount = 0
let compcount = 0

function start(c,b){
    if (c == b){
        result.innerHTML = "<h2>Equal</h2> " 
    }
    else if ((c == "scissor" && b == "rock") || (c == "rock" && b == "paper") || (c == "paper" && b == "scissor")){
        result.innerHTML = "<h2>Computer</h2>"
        compcount = compcount + 1
    }
    else if((c == "rock" && b == "scissor") || (c == "paper" && b == "rock") || (c == "scissor" && b == "paper")){
        result.innerHTML = "<h2>User</h2>"
        usercount = usercount + 1
    }
    else{
        result.innerHTML = "Please Enter the valid input"
    }
}

