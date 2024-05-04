const displayCount = document.getElementById("count");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const reset = document.getElementById("reset");

let count = 0;

add.addEventListener("click" , () => {
    count++;
    displayCount.innerHTML = count;
})


subtract.addEventListener("click", () => {
  if(count > 0){
    count--;
  }
  displayCount.innerHTML = count;
});


reset.addEventListener("click", () => {
    count = 0;
    displayCount.innerHTML = count
});