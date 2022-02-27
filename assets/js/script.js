    // 1. prompt user for password criteria
    // 2. select criteria to include in password
    // 3. prompt user to select length between 8 and 128
    // 4. user confirms whether lowercase,uppercase,special characters, and numeric values contain

    var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
    var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var specialChar = ["!@#$%^&*()<>?/.,:;=+"];
    var num = [123456789];

    var promptPassword;

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
    var chosenChar= [];
    var newPassword = [];

    var promptPassword = window.prompt ("How many characters would you like your password to contain? Must be between 8 and 128 characters.")

    if (promptPassword >= 8 && promptPassword <= 128) {

        var confirmLowercase = window.confirm("Would you like to add lowercase letters?");
        var confirmUppercase = window.confirm("Would you like to add uppercase letters?");
        var confirmSpecialChar = window.confirm("Would you like to add special characters?");
        var confirmNum = window.confirm("Would you like to add numbers?");

    } else {
    window.alert("Password must be between 8 and 128 characters!")
    return ("Please press generate password again.")
    }

    if (
        confirmLowercase === false && confirmUppercase === false && confirmSpecialChar === false && confirmNum === false ){
            window.alert ("You must choose atleast one option. Please try again")
            return ("Please press generate password again.")
        }

    else if (confirmLowercase && confirmUppercase && confirmSpecialChar && confirmNum) {
        chosenChar = lowercase + uppercase + specialChar + num;
    }
    else if (confirmLowercase && confirmUppercase && confirmSpecialChar) {
        chosenChar = lowercase + uppercase + specialChar;
    }
    else if (confirmLowercase && confirmUppercase && confirmNum) {
        chosenChar = lowercase + uppercase + num;
    }
    else if (confirmLowercase && confirmUppercase) {
        chosenChar = lowercase + uppercase;
    }
    else if (confirmLowercase) {
        chosenChar = lowercase;
    }
    else if (confirmLowercase && confirmNum) {
        chosenChar = lowercase + num;
    }
    else if (confirmLowercase && confirmSpecialChar) {
        chosenChar = lowercase + specialChar;
    }
    else if (confirmUppercase && confirmSpecialChar && confirmNum) {
        chosenChar = uppercase + specialChar + num;
    }
    else if (confirmUppercase && confirmNum) {
        chosenChar = uppercase + num;
    }
    else if (confirmUppercase && confirmSpecialChar) {
        chosenChar = uppercase + specialChar;
    }
    else if (confirmSpecialChar && confirmNum) {
        chosenChar = specialChar + num;
    }
    else if (confirmNum) {
        chosenChar = num;
    }
    else if (confirmUppercase){
        chosenChar = uppercase;
    }
    else if (confirmSpecialChar){
        chosenChar = specialChar;
    }
    else if (confirmLowercase &&  confirmSpecialChar && confirmNum) {
        chosenChar = lowercase + specialChar + num;
    }

    var generator = [];

    for (var i = 0; i < promptPassword; i++) {
        var random = chosenChar[Math.floor(Math.random() * chosenChar.length)];
        generator.push(random);
} 
    var newPassword = generator.join("");
    return newPassword;
    }
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
