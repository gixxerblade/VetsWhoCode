/* Task 1
if (a string with zero)
Will alert be shown?

if("0"){
    alert('Hello');
} */

//Yes it will

//Task 2***********

var name = prompt("What is the official name of JavaScript?");
if (name == "ECMAScript"){
    alert("Right!");
}
else{
    alert("Didn't know? ECMAScript!");
}

//Task 3********
/* The name of JavaScript
Using the if..else construct, 
write the code which asks: ‘What is the “official” 
name of JavaScript?’

If the visitor enters “ECMAScript”, 
then output “Right!”, otherwise – output: 
“Didn’t know? ECMAScript!”
 */
var num = prompt("Enter a number");
if (num>0){
    alert(1);
}
else if (num < 0){
    alert(-1);
}
else{
    alert(0);
}

//Task 4
/* 
Rewrite 'if' into '?'
importance: 5
Rewrite this if using the ternary operator '?':

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */
/* Rewritten 
result = (a + b < 4) ? 'Below':'Over' */;

/* Task 5
Rewrite 'if..else' into '?'
importance: 5
Rewrite if..else using multiple ternary 
operators '?'.

For readability, it’s recommended to split
the code into multiple lines. */

/* 
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} 
*/

let login = prompt("Employee or Director?")
let message = (login == 'Employee') ? "Hello":
                (login == 'Director') ? "Greetings":
                (login == '')? "No Login": "";
    alert(message);