const add = document.getElementById("btn1");
const display = document.getElementById("btn2");
const text = document.getElementById("text1");
const wrapper = document.getElementById("wrapper");
const item = document.getElementById("added-item");
let result = document.getElementById("result");

let addedItem = 0;
let array = new Array();
add.addEventListener("click", () => {
  item.removeAttribute("style");
  if(text.value == '') return
  else{
  array[addedItem] = text.value;
  item.textContent = `You have added ${array[addedItem]} to the array at index ${addedItem}`;
  addedItem++;
  console.log(array);
  text.value = "";}
});
display.addEventListener("click", () => {
  item.setAttribute("style", "display:none;");
  result.prepend("You have added the following to the array: ");
  text.focus();
  let e = '';
  for (let i = 0; i < array.length; i++) {
    e  += `Element ${i} is ${array[i]} <br>`;
    result.innerHTML = e;
    }
});
display.addEventListener("keypress", () => {
  if (event.keyCode === 13) {
    display.click();
    text.focus();
  }
});
