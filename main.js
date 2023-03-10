const inputField = document.getElementById("gtinInput");
const outputField = document.getElementById("gtinOutput");
const formatButton = document.getElementById("formatBtn");

function format(){
    outputField.value = inputField.value.replace(/\n|\s/g,",");
}

formatButton.addEventListener("click", format);