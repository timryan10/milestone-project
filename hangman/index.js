//display word
let words = ['cat', 'dog', 'mouse', 'elephant', 'alligator', 'javascript', 'pizza', 'football', 'list', 'above', 'butter', 'chicken', 'snake', 'fries', 'pasta', 'steak', 'sandwhich', 'pony', 'music', 'buccees', 'texas', 'whataburger', 'raleigh', 'basketball', 'soccer', 'guitar', 'dragon', 'hangman'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let currentWordState = Array(selectedWord.length).fill('_');
let gameboard = document.getElementById('hangman');
let display = document.getElementById('display');
display.innerText = currentWordState.join(' ');
gameboard.appendChild(display);

//set up lives left
let maxLives = 6;
let livesDisplay = document.createElement('div');
livesDisplay.innerText = `Lives: ${maxLives}`;
livesDisplay.style.display = 'block';
livesDisplay.style.textAlign = 'center';
livesDisplay.style.margin = '1em';
gameboard.appendChild(livesDisplay);

//create input
let letterInput = document.createElement('input');
letterInput.setAttribute('type','text');
letterInput.setAttribute('maxlength', '1');
letterInput.style.textAlign = 'center';
letterInput.style.display = 'block';
letterInput.style.marginLeft = 'auto';
letterInput.style.marginRight = 'auto';
letterInput.style.marginTop = '1em';
letterInput.style.marginBottom = '1em';
gameboard.appendChild(letterInput);

//create submit botton
let submitButton = document.createElement('button')
submitButton.innerHTML = 'Submit';
submitButton.style.display = 'block';
submitButton.style.marginLeft ='auto';
submitButton.style.marginRight = 'auto';
submitButton.style.marginTop = '1em';
submitButton.style.marginBottom = '1em';
submitButton.addEventListener('click', handleLetterInput)
gameboard.appendChild(submitButton);

let lives = maxLives;

//letter selection
function handleLetterInput(){
    let guessedLetter = letterInput.value;
        if(selectedWord.includes(guessedLetter)){
           for (let i = 0; i < selectedWord.length; i++) {
            if(selectedWord[i] === guessedLetter){
                currentWordState[i] = guessedLetter;
            }
           }
           display.innerText = currentWordState.join('')
        }
        else {
        lives--;
        livesDisplay.innerText = `Lives: ${lives}`;
    }
    updateImage()
    checkGame()  
    checkGuess()
}

//update image after guess
function updateImage(){
   if (lives === 6) {
        let image = document.getElementById('map');
        image.src = 'hangman1.png'
        return image
   }
    else if (lives === 5) {
        let image = document.getElementById('map');
        image.src = 'hangman2.png'
        return image
}
    else if (lives === 4) {
        let image = document.getElementById('map');
        image.src = 'hangman3.png'
        return image
}
    else if (lives === 3) {
        let image = document.getElementById('map');
        image.src = 'hangman4.png'
        return image 
}
    else if (lives === 2) {
        let image = document.getElementById('map');
        image.src = 'hangman5.png'
        return image    
}
    else if (lives === 1) {
        let image = document.getElementById('map');
        image.src = 'hangman6.png'
        return image   
}
    else  if (lives === 0) {
        let image = document.getElementById('map');
        image.src = 'hangman7.png'
        return image   
}
}

//check the status of game
function checkGame(){
    if(currentWordState.every(letter => letter !== '_')){
        let text = document.getElementById('message')
        text.innerText = 'Congratulations! You Won!'
        text.style.color = 'green'
        submitButton.disabled = true;
        return text
    } else if (lives === 0) {
        let text = document.getElementById('message')
        text.innerText = 'Sorry! The word was ' + selectedWord
        text.style.color = 'red'
        submitButton.disabled = true;
        return text
    }
}

//reload game
function reload(){
    location.reload();
}