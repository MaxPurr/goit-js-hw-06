const nameInput = document.querySelector("#name-input");
const nameoutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    
    if (event.currentTarget.value !== "")
        nameoutput.textContent = event.currentTarget.value;
    else nameoutput.textContent = "Anonymous";
});