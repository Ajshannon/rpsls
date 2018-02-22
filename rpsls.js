let userPrompt =  prompt("enter a choice: ");

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'lizard' || userInput === 'spock') {
        return userInput;
    } else {
        console.log('Error!');
    }
};

function getComputerChoice() {
    switch (Math.floor(Math.random() * 5)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        case 3:
            return 'lizard';
        case 4:
            return 'spock';

    }
};

function determineWinner(userChoice, computerChoice) {
    let userChoice = getUserChoice(userPrompt);
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Won!';
        } else if (computerChoice === 'spock') {
            return 'Computer Won!';
        } else if (computerChoice === 'lizard') {
            return 'You Won!';
        } else if (computerChoice === 'scissors') {
            return 'You Won!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You Won!';
        } else if (computerChoice === 'spock') {
            return 'You Won!';
        } else if (computerChoice === 'lizard') {
            return 'Computer Won!';
        } else if (computerChoice === 'scissors') {
            return 'Computer Won!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer Won!';
        } else if (computerChoice === 'spock') {
            return 'Computer Won!';
        } else if (computerChoice === 'lizard') {
            return 'You Won!';
        } else if (computerChoice === 'paper') {
            return 'You Won!';
        }
    }
    else if (userChoice === 'lizard') {
        if (computerChoice === 'rock') {
          return 'You Won!';
        } else if (computerChoice === 'spock') {
          return 'Computer Won!';
        } else if (computerChoice === 'paper') {
          return 'You Won!';
        } else if (computerChoice === 'scissors') {
          return 'Computer Won!';
        } 
      }
      else if (userChoice === 'spock') {
        if (computerChoice === 'rock') {
          return 'You Won!';
        } else if (computerChoice === 'lizard') {
          return 'Computer Won!';
        } else if (computerChoice === 'paper') {
          return 'Computer Won!';
        } else if (computerChoice === 'scissors') {
          return 'You Won!';
        } 
      }

}


const playGame = () => {
    let userChoice = getUserChoice(userPrompt);
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();