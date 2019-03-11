console.log("working...")
var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

const choices = ["Rock", "Paper", "Scissors"];

function randomComputerChoice() {
  choice = Math.floor(Math.random() * choices.length);
  return(choices[choice]);
}

function win(u, c) {
  console.log("User Wins");
  userScore++;
  userScore_span.innerHTML = userScore;
  var selected_element = document.getElementById(u);
  selected_element.classList.add('green-glow');
  setTimeout(function() { selected_element.classList.remove('green-glow')}, 1000);
  var new_message = u + " beats " + c + ". You win!";
  return(new_message)
}

function lose(u, c) {
  console.log("User Loses");
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  var selected_element = document.getElementById(u);
  selected_element.classList.add('red-glow');
  setTimeout(function() { selected_element.classList.remove('red-glow')}, 1000);
  var new_message = c + " beats " + u + ". You lose!";
  return(new_message)
}

function draw() {
  console.log("Draw");

  var new_message = "It's a draw..."
  return(new_message)
}

function game(user_choice) {
  var comp_choice = randomComputerChoice();
  var new_message = "";

  switch (user_choice + comp_choice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      new_message = win(user_choice, comp_choice);
      break;

    case "ScissorsRock":
    case "RockPaper":
    case "PaperScissors":
      new_message = lose(user_choice, comp_choice);
      break;

    default:
      new_message = draw();

  }

  result_div.innerHTML = new_message
}

function main() {

  rock_div.addEventListener('click', function() {
    game(choices[0]);
  })

  paper_div.addEventListener('click', function() {
    game(choices[1]);
  })

  scissors_div.addEventListener('click', function() {
    game(choices[2]);
  })

}

main();
