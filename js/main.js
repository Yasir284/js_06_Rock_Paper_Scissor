let userScore = document.querySelector("#userScoreVal");
let compScore = document.querySelector("#compScoreVal");
let userStat = document.querySelector("#result-user-stat");
let compStat = document.querySelector("#result-comp-stat");
let winner = document.querySelector("#result-final-stat");
let rock = document.querySelector("#r");
let paper = document.querySelector("#p");
let scissor = document.querySelector("#s");
userStat.appendChild(document.createElement("span"));
compStat.appendChild(document.createElement("span"));
winner.appendChild(document.createElement("span"));
document.querySelector("main").append(document.createElement("audio"));
let audio = document.querySelector("audio");
audio.src = "./Images/mixkit-slot-machine-wheel-1932.wav";
rock.addEventListener("click", () => {
  getWinner("🪨");
});

paper.addEventListener("click", () => {
  getWinner("📃");
});

scissor.addEventListener("click", () => {
  getWinner("​✂️");
});

function randomStat() {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      document.querySelector("#result-comp-stat span").textContent = [
        "🪨",
        "​✂️",
        "📃",
      ][Math.floor(Math.random() * 3)];
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      resolve(document.querySelector("#result-comp-stat span").textContent);
    }, 3000);
  });
}
// console.log(randomStat());

async function getWinner(userChoice) {
  document.body.classList.remove("yes");
  document.body.classList.remove("no");
  document.body.classList.remove("tie");
  let user = (document.querySelector("#result-user-stat span").textContent =
    userChoice);
  audio.load();
  audio.play();
  let comp = await randomStat();
  audio.pause();
  logic(user, comp);
}

function logic(user, comp) {
  document.querySelector("#result-comp-stat span").textContent = comp;
  if (user == "🪨" && comp == "​✂️") {
    winner.firstElementChild.textContent = " User";
    ++userScore.textContent;
    document.body.classList.add("yes");
  } else if (user == "🪨" && comp == "📃") {
    winner.firstElementChild.textContent = " Computer";
    ++compScore.textContent;
    document.body.classList.add("no");
  } else if (user == "​✂️" && comp == "📃") {
    winner.firstElementChild.textContent = " User";
    ++userScore.textContent;
    document.body.classList.add("yes");
  } else if (user == "​✂️" && comp == "🪨") {
    winner.firstElementChild.textContent = " Computer";
    ++compScore.textContent;
    document.body.classList.add("no");
  } else if (user == "📃" && comp == "🪨") {
    winner.firstElementChild.textContent = " User";
    ++userScore.textContent;
    document.body.classList.add("yes");
  } else if (user == "📃" && comp == "​✂️") {
    winner.firstElementChild.textContent = " Computer";
    ++compScore.textContent;
    document.body.classList.add("no");
  } else if (user == comp) {
    winner.firstElementChild.textContent = " Tie";
    document.body.classList.add("tie");
  }
}

// function addUserCount() {
//   i = 0;
//   return (userScore.textContent = ++i);
// }
// console.log(addUserCount());
// function addCompCount() {
//   i = 0;
//   return (compScore.textContent = ++i);
// }
