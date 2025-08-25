const countText = document.getElementById("count");
const decBtn = document.getElementById("dec");
const incBtn = document.getElementById("inc");
const resetBtn = document.getElementById("reset");

let count = 0;

function increment() {
  count++;
  countText.innerText = count;
}

function decrement() {
  count--;
  countText.innerText = count;
}

function reset() {
  count = 0;
  countText.innerText = count;
}

decBtn.addEventListener("click", decrement);
incBtn.addEventListener("click", increment);
resetBtn.addEventListener('click', reset); 
