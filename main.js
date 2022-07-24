console.log("Let's play Hangman!");

let board = ["-", "-", "-", "-", "-"];
let guessesAllowed = 10;

console.log(board);

let answer = "abyss";

let guess = prompt("Guess a letter!");
guess = guess.toLowerCase();
guess = guess.trim();

while (guessesAllowed || guessesAllowed === 0) {
  let guessIndex = "abyss".indexOf(guess);
  // console.log("Guess Index", guessIndex)

  // console.log(answer)
  let answerArray = answer.split("");
  // console.log(answerArray)

  let guessLetter = answerArray.filter((el) => el == guess);
  // console.log("guessLetter", guessLetter);

  if (guessIndex > -1) {
    board.splice(guessIndex, 1, guess);
  }

  if (guessLetter.length > 1) {
    for (let i = 0; i < guessLetter.length; i++) {
      let copyOfArray = answerArray;
      // console.log(copyOfArray);
      copyOfArray.splice(guessIndex, 1, "");
      guessIndex = copyOfArray.indexOf(guess);
      // console.log("copyOfArray", copyOfArray,
      //           "guessIndex", guessIndex,
      //             "guess", guess);

      // reassign guess index the index value of the next letter found

      // repeat if necessary for amount of letters found

      board.splice(guessIndex, 1, guess);
    }
  }

  // need this line to subtract my guesses allowed regardless of the answer and print it to the screen
  if (!board.includes("-"))
    return console.log(board, "He lives! You have saved the prisoner!");

  if (guessesAllowed > 0 || guessIndex === -1) {
    guessesAllowed--;
    console.log("Guesses remaining: ", guessesAllowed);
    if (guessesAllowed === 0) return console.log(board, "GAME OVER");
  }
  if (guessesAllowed < 4) {
    console.log("Dude! They're about to die! Get it together!");
  }

  console.log(board);

  guess = prompt("Guess again!");
  guess = guess.toLowerCase();
  guess = guess.trim();
}

// to do list:
// allow duplicate letters
// fix guess index for wrong guess
// fill in the last blank when game has been won
