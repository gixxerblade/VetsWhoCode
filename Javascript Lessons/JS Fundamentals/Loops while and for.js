/* let i = 3;

while (i) {
  alert( i-- );
}
 */
/* let i = 0;
while (++i < 5) alert( i ); */

/* let i = 0;
while (i++ < 5) alert( i ); */


//Output even numbers in the loop
/* for(let i = 1; i<10; i++){  
    if(i%2==0){                     //Output even numbers
        console.log(i);
    }
} */

//Replace "for" with "while"
//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
/* for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  } */
/*   let j = 0;
  while(j<3){
      console.log(j);
      j++;
  } */

//Repeat until the input is correct
/* Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

 */
let x;
do {
    x = prompt("Please enter a number greater than 100", 0);
}
while (x <=100 && x || isNaN(x)); //added to check if x is a number or not. 
alert("Thanks!");

//Output prime numbers
/* An integer number greater than 1 is called a prime if it cannot be divided without a remainder by 
anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value. */

let num = prompt("This will print out all primes between 2 to whatever you choose", 0);
nextPrime:
for(let i=2;i<=num;i++ ){
    for(let j = 2; j<i; j++){
        if (i%j == 0) continue nextPrime;
    }
    console.log(i);
}