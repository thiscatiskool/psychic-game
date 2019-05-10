//How many Wins the use has
var Wins = 0

//How many Losses the User has
var Loses = 0

//How many guesses the User has left
var GuessesLeft = 10

//This is letters the User has guessed in the form of an Array
var YourGuesses = []

//The Array for which the computer to choose the random letter
var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];

//This is the computers random guess
var randomLetter = Letters[Math.floor(Math.random()*Letters.length)];
console.log(randomLetter)

function updateDisplay() {
    //These will display each varaible on the document
    document.getElementById('Wins').innerHTML = 'Wins: ' + Wins
    document.getElementById('Loses').innerHTML = 'Loses: ' + Loses
    document.getElementById('GuessesLeft').innerHTML = 'Guesses Left: ' + GuessesLeft
    document.getElementById('YourGuesses').innerHTML = 'Your Guesses: ' + YourGuesses

}

updateDisplay()

//Getting the Key press for the User letter into the array
document.onkeyup = function (event) {
    
    //This is the if statement to check if the letter has already been pressed.
        //This matches the users guess to any guess already in the array
        //Find a way to search the array!!!!!
    if (YourGuesses.includes(event.key.toLowerCase())) {
        alert("Letter has already been guessed. Please Try Again")
        //This returns the function to the beginning of the guessing stage
        return
    } else {
        YourGuesses.push(event.key.toLowerCase())

        //Decrease the variable in GuessesLeft by 1 after each User guess
        GuessesLeft--;


        //Once the User has guessed the correct letter
        if (
            //Matching the Users guess to the random letter chosen
            YourGuesses.includes(randomLetter) //=== randomLetter
        ) {
            //Add +1 to the variable Wins
            Wins++
            //Reset the array Your Guesses
            YourGuesses=[]
            //Resets the GuessesLeft variable back to 10
            GuessesLeft = 10
            //Display var Wins on the document
            document.getElementById('Wins').innerHTML = 'Wins: ' + Wins
            //Displays var GuessesLeft on the document
            document.getElementById('GuessesLeft').innerHTML = "Guesses Left: " + GuessesLeft
            //Display Alert saying that the User has won the game but can continue playing
            alert("You have won the game! Continue playing to see how many wins you can get.")
            randomLetter = Letters[Math.floor(Math.random()*Letters.length)];
                console.log(randomLetter)
        } else {
            //This line of code is supposed to write the array to the document for Your Guesses
            let printholder = YourGuesses[0]
            for (let i = 1; i < YourGuesses.legnth; i++) {
                printholder = printholder + ", " + arr[i]
                document.getElementById(printholder).innerHTML = "Your Guesses: " + printholder


            }

        }
        //Once the user runs out of guesses
        if (
            GuessesLeft === 0) {
            //Losses Go up by 1
            Loses++
            //Reset the array Your Guesses
            YourGuesses=[]
            //Resets the GuessesLeft variable back to 10
            GuessesLeft = 10
            //Display var Loses on the document
            document.getElementById('Loses').innerHTML= "Loses: " + Loses
            //Displays var GuessesLeft on the document
            document.getElementById('GuessesLeft').innerHTML = "Guesses Left: " + GuessesLeft
            //Display Alert saying that the User has won the game but can continue playing
            alert("You have lost the game! Continue playing to see how many wins you can get.")
            randomLetter = Letters[Math.floor(Math.random()*Letters.length)];
            console.log(randomLetter)
        }

        updateDisplay()

    }
}