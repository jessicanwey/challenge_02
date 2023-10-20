var generateBtn = document.querySelector("#generate"); 

//Get the desired length of password and validate that it is between 8 and 128 chcaracters
function validateLength(){
    var characterNumber = prompt("How many characters would you like your password to be?", "Any number between 8 and 128");
    var lengthInteger = parseInt(characterNumber);

    if(lengthInteger >= 8 && lengthInteger <= 128){
        return lengthInteger;
    } else {
        alert("Please enter a number between 8 and 128.");
        validateLength();
    }   

}

//If user says yes include lowercase letters in possible characters
function validateLowerCase(){
    var lowerCase = prompt("Would you like your password to include lower case letters?", "yes or no");
    var includeLowerCase = false;

    if(lowerCase === "yes"){
        includeLowerCase = true;
    } else if (lowerCase === "no"){
        includeLowerCase = false;
    } else {
        alert("Please answer yes or no.");
        validateLowerCase();
    }

    return includeLowerCase;
}

//If user says yes include uppercase letters in possible characters
function validateUpperCase(){
    var upperCase = prompt("Would you like your password to include upper case letters?", "yes or no");
    var includeUpperCase = false;

    if(upperCase === "yes"){
        includeUpperCase = true;
    } else if (upperCase === "no"){
        includeUpperCase = false;
    } else {
        alert("Please answer yes or no.");
        validateUpperCase();
    }

    return includeUpperCase;
}

//If user says yes include special characters in possible characters
function validateSpecialCharacters(){
    var characters = prompt("Would you like your password to include special characters?", "yes or no");
    var includeCharacters = false;

    if(characters === "yes"){
        includeCharacters = true;
    } else if (characters === "no"){
        includeCharacters = false;
    } else {
        alert("Please answer yes or no.");
        validateSpecialCharacters();
    }

    return includeCharacters;

}

//If user says yes include numbers in possible characters
function validateNumbers(){
    var numbers = prompt("Would you like your password to include numbers?", "yes or no");
    var includeNumbers = false;

    if(numbers === "yes"){
        includeNumbers = true;
    } else if (numbers === "no"){
        includeNumbers = false;
    } else {
        alert("Please answer yes or no.");
        validateNumbers();
    }

    return includeNumbers;

}

//Add characters to the list of possible characters for the password based on prompts
function generatePassword(){
    var passwordCharacters = "";
    var passwordLength = validateLength();
    var lowerCase = validateLowerCase();
    var upperCase = validateUpperCase();
    var numbers = validateNumbers();
    var specialCharacters = validateSpecialCharacters();
    var password = "";

    if(lowerCase){
        passwordCharacters = passwordCharacters.concat("abcdefghijklmnopqrstuvwxyz");
    }if(upperCase){
        passwordCharacters = passwordCharacters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }if(specialCharacters){
        passwordCharacters = passwordCharacters.concat("!@#$%^&*()");
    }if(numbers){
        passwordCharacters = passwordCharacters.concat("1234567890");
    }

    for(var i = 0; i <= passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * passwordCharacters.length);
        password += passwordCharacters.substring(randomNumber, randomNumber +1);
    }

    return password;
}

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
