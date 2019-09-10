/* Task 1***********
What's the result of OR?
importance: 5
What is the code below going to output?

alert( null || 2 || undefined ); */

// 2 IS THE FIRST TRUTH VALUE

/*Task 2***********
What's the result of OR'ed alerts?
importance: 3
What will the code below output?

alert( alert(1) || 2 || alert(3) );

1 and 2. 
*/

/* Task 3*************
What is the result of AND?
importance: 5
What is this code going to show?

alert( 1 && null && 2 ); 

null
*/

/* Task 4************
What is the result of AND'ed alerts?
importance: 3
What will this code show?

alert( alert(1) && alert(2) );

1 and undefined
*/

/* Task 5******************
The result of OR AND OR
importance: 5
What will the result be?

alert( null || 2 && 3 || 4 ); 

3 because 3 is higher than 2
*/

/* Task 6********
Check the range between
importance: 3
Write an “if” condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90. */

/* let age = prompt("How old are you?");
if (age >= 14 && age <=90){
    alert("You are between 14 and 90 years old");
}
else{
    alert("You are either younger than 14 or older than 90!");
} */

/* Task 7*************
Check the range outside
importance: 3
Write an if condition to check that age is NOT between 
14 and 90 inclusively.

Create two variants: the first one using NOT !, 
the second one – without it.

 */
/* let newAge = prompt("How old are you?");
if (!(newAge >= 14 && newAge <= 90)){
    alert("You are not between 14 and 90.");}

if (newAge < 14 || age > 90){
    alert("Same thing");
} */

/* 
Task 8************
A question about "if"
importance: 5
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)? 

first and third
*/

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );


/* Task 9*************
Check the login
importance: 3
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input 
is an empty line or Esc – show “Canceled.”, if it’s another string – 
then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled.”
The schema:
http://javascript.info/task/check-login/ifelse_task.png


Please use nested if blocks. Mind the overall readability of the code.

Hint: passing an empty input to a prompt returns an empty string ''. 
Pressing ESC during a prompt returns null.

 */
var userName = prompt("Who's there?", "");

if (userName == "Admin"){
    var password = prompt("Password");
    if (password == 'TheMaster') {
        alert( 'Welcome!' );
      } else if (password == '' || pass == null) {
        alert( 'Canceled.' );
      } else {
        alert( 'Wrong password' );
      }
    
    } else if (userName == '' || userName == null) {
      alert( 'Canceled' );
    } else {
      alert( "I don't know you" );
}