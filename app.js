

const randomNumber = Math.ceil(Math.random() * 100);
let numberOfGuess = 1;


const validateNumber = (value) => {
    if (isNaN(value)) {
        return "please enter a valid number"
    } else if (value < 1 || value > 100) {
        return "please enter number between 1 to 100"
    }
}

const checkGuess = (guess) => {
    numberOfGuess++;
    console.log(numberOfGuess);
    if (guess === randomNumber) {
        console.log("You guessed correctly");
    } else if (guess < randomNumber) {
        console.log("Too low! Try Agin");
        play()
    } else {
        console.log("Too high! Try Agin");
        play()
    }

}
const play = () => {
    const number = prompt("Enter Number Between 1 To 100");

    if (number === null) return;
    if (numberOfGuess >= 10) {
        console.log("Game Over");
        console.log("Random Number is:", randomNumber);
        return
    }

    const validation = validateNumber(number)
    if (validation) {
        console.log(validation);

        return play()
    }
    checkGuess(+number)
}


play()