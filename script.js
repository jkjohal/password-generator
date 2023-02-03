// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//password criteria
//length (8-128), lowercase, uppercase, numeric, special characters, need at least one type
var passwordLength = window.prompt("How many characters do you want your password to be?");

var passwordLowerCase = window.confirm("Do you want your password to include lower case letters?");

if(passwordLowerCase){
  let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
} else {
  let lowerCaseChars = ""
};

var passwordUpperCase = window.confirm("Do you want your password to include upper case letters?");

if(passwordUpperCase){
  let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
} else {
  let upperCaseChars = ""
};

var passwordNumbers = window.confirm("Do you want your password to include numbers?");

if(passwordNumbers){
  let numberChars = "0123456789"
} else {
  let numberChars = ""
};

var passwordSpecial = window.confirm("Do you want your password to include special characters?");

if(passwordSpecial){
  let specialChars = "!@#$%^&*()"
} else {
  let specialChars = ""
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
