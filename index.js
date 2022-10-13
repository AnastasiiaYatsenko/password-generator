let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let result = document.getElementById("random-password");
let lettersInput = document.getElementById("letters-input");
let digitsInput = document.getElementById("digits-input");
let symbolsInput = document.getElementById("symbols-input");
let allCharacterInput = document.getElementById("character-input");


function generatePassword() {
  let randomPassword = '';
  for (let i = 0; i < 12; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomPassword += characters[randomIndex];
    result.textContent = randomPassword;
    if (lettersInput.checked) {
      return generatePasswordByLetters();
    } else if (digitsInput.checked) {
      return generatePasswordByDigits();
    } else if (symbolsInput.checked) {
      return generatePasswordBySymbols();
    } else if (allCharacterInput.checked) {
      return generatePasswordByAllCharacters();
    }
  }
}

function generatePasswordByLetters() {
  let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let randomPassword = '';
  for (let i = 0; i < 12; i++) {
    let randomIndex1 = Math.floor(Math.random() * letters.length);
    randomPassword += letters[randomIndex1];
    result.textContent = randomPassword;
  }
}

function generatePasswordByDigits() {
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let randomPassword = '';
  for (let i = 0; i < 12; i++) {
    let randomIndex2 = Math.floor(Math.random() * digits.length);
    randomPassword += digits[randomIndex2];
    result.textContent = randomPassword;
  }
}

function generatePasswordBySymbols() {
  let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
  let randomPassword = '';
  for (let i = 0; i < 12; i++) {
    let randomIndex3 = Math.floor(Math.random() * symbols.length);
    randomPassword += symbols[randomIndex3];
    result.textContent = randomPassword;
  }
}

function generatePasswordByAllCharacters() {
  let allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
  let randomPassword = '';
  for (let i = 0; i < 12; i++) {
    let randomIndex4 = Math.floor(Math.random() * allCharacters.length);
    randomPassword += allCharacters[randomIndex4];
    result.textContent = randomPassword;
  }
}


