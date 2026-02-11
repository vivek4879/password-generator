const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let password_length = document.getElementById("password-length");
let password_box1 = document.getElementById("password-box1");
let password_box2 = document.getElementById("password-box2");
let gen_button = document.getElementById("gen-button");



function generate_password(){
    if(password_length.value === ""){
        return;
    }
    if(password_length.value > 15)return;
    let password = "";
    for(let i = 0; i < password_length.value; i++){
        let random_index = Math.floor(Math.random() * characters.length);
        password+=characters[random_index];
    }
    return password;
}


function render_password(){
    password_box1.value = generate_password();
    password_box2.value = generate_password();
}