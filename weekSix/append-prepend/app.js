const add = document.getElementById("btn1");
const display = document.getElementById("btn2");
const text = document.getElementById("text1");
const wrapper = document.getElementById("wrapper");
const item = document.getElementById("added-item");
const resetBtn = document.getElementById("btn3");
let result = document.getElementById("result");
display.setAttribute("disabled", "");

let addedItem = 0;
let array = new Array();
let displayArray = () => {
  result.removeAttribute("style");
  item.setAttribute("style", "display:none;");
  result.prepend("You have added the following to the array: ");
  let e = "";
  for (let i = 0; i < array.length; i++) {
    e += `Element ${i} is ${array[i]} <br>`;
    result.innerHTML = e;
  }
  text.focus();
};
display.addEventListener("click", displayArray);

let addAnItemToArray = () => {
  item.removeAttribute("style");
  display.removeAttribute("disabled", "");
  if (text.value == "") return;
  else {
    result.setAttribute("style", "display:none;");
    array[addedItem] = text.value;
    item.textContent = `You have added ${array[addedItem]} to the array at index ${addedItem}`;
    addedItem++;
    console.log(array);
    text.value = "";
  }
  text.focus();
};

let resetArray = () => {
  array = [];
  result.setAttribute("style", "display:none;");
  item.setAttribute("style", "display:none;");
  text.value == "";
  display.setAttribute("disabled", "");
  text.focus();
};
resetBtn.addEventListener("click", resetArray);
add.addEventListener("click", addAnItemToArray);

text.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addAnItemToArray();
    text.focus();
  }
});
