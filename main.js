console.log("Let's play Hangman!")

let board = ["-", "-", "-", "-", "-"]
let guessesAllowed = 9

console.log(board)

let answer = "abyss"

let guess = prompt("Guess a letter!")


while (guessesAllowed) {

  let guessIndex = answer.indexOf(guess)

  if (guessIndex > -1) {
    board.splice(guessIndex, 1, guess)
  }

  if (guessIndex === -1) {
    guessesAllowed--
    console.log("guesses remaining: ", guessesAllowed)
    console.log("Dude! They're about to die! Get it together!")

  }


  if (!board.includes("-")) return console.log("He lives! You have saved the prisoner!")
  

  console.log(board)


  guess = prompt("Guess again!")
}
console.log("GAME OVER")





