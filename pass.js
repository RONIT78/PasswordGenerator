var password = document.getElementById("display")
let generate = document.getElementById("generate")
let copy = document.getElementById("copy")

generate.addEventListener('click', () => {
    genPass();
})
copy.addEventListener('click', () => {
    copyPass();
})

function genPass() {
    let length = document.getElementById("length").value


    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var passwordLength = length;
    var password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);

    }
    document.getElementById("display").value = password;

}

//copy from youtube

function copyPass() {
    var copyText = document.getElementById("display");

    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");

}