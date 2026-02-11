const uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbersChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolsChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const lengthInput = document.getElementById("password-length");
const passwordBox1 = document.getElementById("password-box1");
const passwordBox2 = document.getElementById("password-box2");
const errorDisplay = document.getElementById("error-message");


function generatePassword() {
    errorDisplay.textContent = "";
    const options = [
        { element: uppercaseEl, array: uppercaseChars },
        { element: lowercaseEl, array: lowercaseChars },
        { element: numbersEl, array: numbersChars },
        { element: symbolsEl, array: symbolsChars }
    ];
    let characters = [];
    options.forEach(option => {
        if (option.element.checked) {
            characters = characters.concat(option.array);
        }
    })
    if (characters.length === 0) {
        errorDisplay.textContent = "Please select at least one character type";
        return "";
    }
    if (checkPasswordLength()) {
        let password = "";
        for (let i = 0; i < lengthInput.value; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }
    return "";
}

function checkPasswordLength() {
    if (lengthInput.value === "") {
        errorDisplay.textContent = "Please enter a password length";
        return false;
    }
    else if (lengthInput.value > 15) {
        errorDisplay.textContent = "Password length should be less than 15";
        return false;
    }
    return true;
}

function renderPassword() {
    passwordBox1.value = generatePassword();
    passwordBox2.value = generatePassword();
}