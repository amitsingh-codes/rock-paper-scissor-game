const scissor = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const result = document.querySelector(".result");
const computerchoice = document.querySelector(".computerchoice");
const userchoice = document.querySelector(".userchoice");
const usercounter = document.querySelector(".usercounter");
const compcounter = document.querySelector(".compcounter");
const resetBtn = document.querySelector(".reset");

let usercount = 0;
let compcount = 0;
let b = null;

// random computer choice
function RPS() {
  let a = Math.random();
  if (a < 0.333) return (b = "scissor");
  else if (a < 0.666) return (b = "rock");
  else return (b = "paper");
}

function start(c, b) {
  const resultBox = result;
  const userBox = userchoice;
  const compBox = computerchoice;

  // reset visuals
  resultBox.className = "result";
  userBox.classList.remove("animate");
  compBox.classList.remove("animate");

  // set choices
  userBox.textContent = c;
  compBox.textContent = b;

  if (c === b) {
    resultBox.textContent = "Draw";
    resultBox.classList.add("draw");
  } else if (
    (c === "scissor" && b === "rock") ||
    (c === "rock" && b === "paper") ||
    (c === "paper" && b === "scissor")
  ) {
    resultBox.textContent = "Computer Wins";
    resultBox.classList.add("lose");
    compBox.classList.add("animate");
    compcount++;
  } else {
    resultBox.textContent = "User Wins";
    resultBox.classList.add("win");
    userBox.classList.add("animate");
    usercount++;
  }

  usercounter.textContent = `User: ${usercount}`;
  compcounter.textContent = `Computer: ${compcount}`;
}

function userselection() {
  [rock, paper, scissor].forEach((btn) => {
    btn.addEventListener("click", function () {
      const c = btn.classList.contains("rock")
        ? "rock"
        : btn.classList.contains("paper")
        ? "paper"
        : "scissor";
      RPS();
      start(c, b);
    });
  });
}

userselection();

resetBtn.addEventListener("click", () => {
  usercount = 0;
  compcount = 0;
  usercounter.textContent = "User: 0";
  compcounter.textContent = "Computer: 0";
  result.textContent = "—";
  result.className = "result";
  userchoice.textContent = "👤";
  computerchoice.textContent = "🤖";
});
