// --------------------------CREATING A BUTTON DYNAMICALLY----------------------------------
// let container = document.getElementsByClassName("container")[0];
// let button = document.createElement("button");
// button.textContent = "Click";
// container.appendChild(button);

let container = document.getElementById("container");
let button = document.createElement("button");
button.textContent = "Click me";
container.appendChild(button);


//-----------------------------adding funtionality, WHEN BTN PRESSED IT SENDS ALERT------------------
button.addEventListener("click", ()=>{
    alert("button pressed")
})