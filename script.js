

const uppercase_chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase_chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers_chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols_chars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");


let password_length = document.getElementById("password-length");
let password_box1 = document.getElementById("password-box1");
let password_box2 = document.getElementById("password-box2");
let gen_button = document.getElementById("gen-button");
let error_message = document.getElementById("error-message");





function generate_password() {
    error_message.textContent = "";
    let characters = [];
    if (uppercase.checked) {
        characters = characters.concat(uppercase_chars);
    }
    if (lowercase.checked) {
        characters = characters.concat(lowercase_chars);
    }
    if (numbers.checked) {
        characters = characters.concat(numbers_chars);
    }
    if (symbols.checked) {
        characters = characters.concat(symbols_chars);
    }
    if (characters.length === 0) {
        error_message.textContent = "Please select at least one character type";
        return "";
    }
    if (check_password_length()) {
        let password = "";
        for (let i = 0; i < password_length.value; i++) {
            let random_index = Math.floor(Math.random() * characters.length);
            password += characters[random_index];
        }
        return password;
    }
    return ""
}

function check_password_length() {
    if (password_length.value === "") {
        error_message.textContent = "Please enter a password length";
        return false;
    }
    else if (password_length.value > 15) {
        error_message.textContent = "Password length should be less than 15";
        return false;
    }
    return true;
}

function render_password() {
    password_box1.value = generate_password();
    password_box2.value = generate_password();
    characters = [];
}