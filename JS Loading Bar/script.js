// grabbing the elements
const CounterElement = document.querySelector(".counter");
const BarElement = document.querySelector(".loading-bar-front");

let index = 0;

// calling a function
UpdateMyNum();

function UpdateMyNum() {
  CounterElement.innerText = index + "%";
  BarElement.style.width = index + "%";
  index++;
  if (index <= 100) {
    setTimeout(UpdateMyNum, 20);
  }
};