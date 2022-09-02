// Grabing he elements
const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

// Callig the function
updateBody();

// Defining the function with coindition
function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

// adding a event listner to the input element
inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

// Storing thr user's action in local-storage for future
function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}