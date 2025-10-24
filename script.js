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
        computerchoice.innerHTML = `computer choice : ${b}`
        userchoice.innerHTML = `user choice : ${c} `
        start(c,b)
        usercounter.innerHTML = `user:${usercount}`
        compcounter.innerHTML = `Computer:${compcount}`
        return c
    })
    scissor.addEventListener("click",function(){
        let c = "scissor"
        RPS()
        computerchoice.innerHTML = `computer choice : ${b}`
        userchoice.innerHTML = `user choice : ${c} `
        start(c,b)
        usercounter.innerHTML = `user:${usercount}`
        compcounter.innerHTML = `Computer:${compcount}`
        return c

    })
    paper.addEventListener("click",function(){
        let c = "paper"
        RPS()
        computerchoice.innerHTML = `computer choice : ${b}`
        userchoice.innerHTML = `user choice : ${c} `
        start(c,b)
        usercounter.innerHTML = `user:${usercount}`
        compcounter.innerHTML = `Computer:${compcount}`
        return c
    })
}

userselection()
 
// for checking the user and computer inputes and also giving them score

let usercount = 0
let compcount = 0

function start(c,b){
    if (c == b){
        result.innerHTML = "Both are equal run it again" 
    }
    else if ((c == "scissor" && b == "rock") || (c == "rock" && b == "paper") || (c == "paper" && b == "scissor")){
        result.innerHTML = "Computer have won the game"
        compcount = compcount + 1
    }
    else if((c == "rock" && b == "scissor") || (c == "paper" && b == "rock") || (c == "scissor" && b == "paper")){
        result.innerHTML = "User have won the game"
        usercount = usercount + 1
    }
    else{
        result.innerHTML = "Please Enter the valid input"
    }
}

