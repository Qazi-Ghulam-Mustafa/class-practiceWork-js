var numInput = document.getElementById("numInput");
// var error = document.getElementById("inputError");
var output = document.getElementById("output");

function input(){
    if (numInput.value % 2 == 0) {
        console.log(numInput.value);
        output.innerText = "The number is even";
    } else {
        output.innerText = "The number is odd";
        console.log(numInput.value);
    }
}