var inputData = document.getElementById("input")
console.log(inputData)

function setNum(num) {
    var lastValue = inputData.value.toString().slice(inputData.value.length - 1)
    console.log(lastValue)
    if (
        lastValue == "+" ||
        lastValue == "-" ||
        lastValue == "*" ||
        lastValue == "/"
    ) {
        if (num == "+" || num == "-" || num == "*" || num == "/") {
            Toastify({
                text: "Enter Correct Data",
                className: "info",
                style: {
                    background: "linear-gradient(to right, red, #197216a5, #96c93d)",
                }
            }).showToast();
        }
        else {
            inputData.value += num;
        }
    } else {
        inputData.value += num;
    }
}

function Equal() {
    inputData.value = eval(inputData.value)
}
function newSet() {
    inputData.value = `(-${inputData.value})`

}

function backSpace() {
    inputData.value = inputData.value.toString().slice(0, inputData.value.length - 1)
}

function clearAll() {
    inputData.value = ""
}
function squareData() {
    inputData.value = inputData.value * inputData.value
}

function cubeData() {
    inputData.value = inputData.value * inputData.value * inputData.value
}

function squareRootData() {
    inputData.value = Math.sqrt(inputData.value)
}

function percentage() {
    var value = inputData.value + "%"
    var result = 0
    if (value.endsWith("%")) {
        var number = perseFloat(value)
    }
}