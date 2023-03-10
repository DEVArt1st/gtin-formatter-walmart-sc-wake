const inputField = document.getElementById("gtinInput");
const outputField = document.getElementById("gtinOutput");
const formatButton = document.getElementById("formatBtn");
const clearButton = document.getElementById("clearBtn");

function format(){
    outputField.value = inputField.value.replace(/\n|\s/g,",");
}

function clearField(){
    inputField.value = "";
}

formatButton.addEventListener("click", format);
clearButton.addEventListener("click", clearField);