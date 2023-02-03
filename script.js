// Assignment code here


//password criteria
//length (8-128), lowercase, uppercase, numeric, special characters, need at least one type

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
const showPassword = document.querySelector("#show-password")
const passwordText = document.querySelector("#password");
const length = document.querySelector("#length");
const includeUppercase = document.querySelector("#uppercase");
const includeLowercase = document.querySelector("#lowercase");
const includeNumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");

// Write password to the #password input
function passwordCriteria() {
  let characters = "";
  includeUppercase.checked ? (characters += uppercase) : "";
  includeLowercase.checked ? (characters += lowercase) : "";
  includeNumbers.checked ? (characters += numbers) : "";
  includeSymbols.checked ? (characters += symbols) : "";
  passwordText.value = generatePassword(length.value, characters);
};

function generatePassword(length, characters){
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

function showCriteria(){
  var x = document.querySelector("#password-settings");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

// Add event listener to generate button
showPassword.addEventListener("click", passwordCriteria);

generateBtn.addEventListener("click", showCriteria);


