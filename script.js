// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var possibleCharacters = []
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var result = ""
  var passwordLength = prompt("What is your desired password length? Min 8, max 128")
  console.log(passwordLength)

  if (passwordLength < 8 || passwordLength > 128)
  return

  var hasNumbers = confirm("Do you want numbers in your password?")
  console.log(hasNumbers)

  var hasLowerCase = confirm("Do you want lower case characters in your password?")
  console.log(hasLowerCase)

  var hasUpperCase = confirm("Do you want uppercase characters in your password?")
  console.log(hasUpperCase)

  var hasSpecialChar = confirm("Do you want special characters in your password?")
  console.log(hasSpecialChar)

 
  if (hasNumbers === true){
    possibleCharacters = possibleCharacters.concat(numericCharacters)
  }

  console.log(possibleCharacters)

  if (hasLowerCase === true){
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
  }

  console.log(possibleCharacters)

  if (hasUpperCase === true){
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
  }

  console.log(possibleCharacters)

  if (hasSpecialChar === true){
    possibleCharacters = possibleCharacters.concat(specialCharacters)
  }

  console.log(possibleCharacters)
 

  for (var i=0; i<passwordLength; i++) {
    var randomChar = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    console.log(randomChar)
    result = result + randomChar
  }

  console.log(result)
  return result
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
