const but1 = document.querySelector(".btn-alert");
const buttons2 = document.querySelector(".but2");

const toggleBody = document.querySelector(".blue-background");

but1.addEventListener("click", myFunction);
function myFunction() {
  alert ("Button has been clicked");
}

const toggleBodyColor = () => {

toggleBody.classList.toggle("blue-background");
toggleBody.classList.toggle("red-background");


};

buttons2.addEventListener("click", toggleBodyColor);

 /* 
const attachEventToAlertButton = function() {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function() {
        alert("Hello World!");
    });
};

const toggleColor = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};

const attachEventToChangeColorButton = function() {
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function() {
        toggleColor();
    });
};

attachEventToAlertButton();
attachEventToChangeColorButton();*/