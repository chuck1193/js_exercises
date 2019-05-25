function rockPaperScissors(usersChoice) {
  var computerChoices = ["rock", "paper", "scissors"];
  var computersChoices = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  console.log(computersChoices)

  if (usersChoice === computersChoices) {
    return "It's a tie";
    rockPaperScissors()
  } else if (usersChoice == "rock") {
      if (computersChoices == "paper") {
        return "Computer Wins!";
      } else {
        return "You Win!";
      }
  } else if (usersChoice === "paper") {
    if (computersChoices === "scissors") {
      return "Computer Wins!";
    } else {
      return "You Win!";
    }
  } else if (usersChoice === "scissors") {
    if (computersChoices === "rock") {
      return "Computer Wins!";
    } else {
      return "You Win!";
    }
  }
}

var result = rockPaperScissors("scissors");
console.log(result)