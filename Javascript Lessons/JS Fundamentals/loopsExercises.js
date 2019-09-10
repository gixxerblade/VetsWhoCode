/* Problems
The output of the problems is written on a single line for brevity; 
your solutions will output each value on a new line.

1. 0 100 200 300 400 500 600 700 800 900 1000
2. 1 2 4 8 16 32 64 128
3. 0 2 4 6 8 10
4. 3 6 9 12 15
5. 9 8 7 6 5 4 3 2 1 0
6. 1 1 1 2 2 2 3 3 3 4 4 4
7. 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 */

//***#1*** */
for(let i = 0; i<=1000; i++){
    if(i % 100 ==0)console.log(i);
}


//***#2*** */
for(i = 1; i<=128; i*=2){
    console.log(i);
    }

//***#3*** */
for(i=0;i<=10;i+=2){
    console.log(i);
}

//***#4*** */
for(i = 0; i<=15;i+=3){
    console.log(i);
}

//***#5*** */
for(i=10;i>=0;i--){
    console.log(i);
}

/****#6*** */
for(i=1;i<=4;i++){
    for(let j=0;j<4;j++){
    console.log(i);}
}

/*****#7**** */
for(i=1;i<4;i++){
    for(j=0;j<=4;j++){
        document.write('<p style="font-size:25px"><strong>' + j + '</strong></p><br>');
    }
}

/** The even/odd reporter
Write a for loop that will iterate from 0 to 20. 
For each iteration, it will check if the current number 
is even or odd, and report that to the screen (e.g. "2 is even").
 */

for(i=0;i<=20;i++){    
    if(i%2==0) {console.log(i + " is even");}
    else(console.log(i + " is odd"))
}

/**Multiplication Tables
Write a for loop that will iterate from 0 to 10. 
For each iteration of the for loop, it will multiply 
the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for 
every multiplier from 1 to 10 (100 results total). */

for(i=0;i<=10;i++){
    console.log(i + " * 9 = " + i * 9);
}

/**The Grade Assigner
Check the results of your assignGrade function from the 
conditionals exercise by logging every value from 60 to 100: 
your log should show "For 88, you got a B. For 89, 
you got a B. For 90, you got an A. For 91, you got an A.", etc., 
logging each grade point in the range. */

for(i=60;i<=100;i++){
    if(i < 70){console.log("For " + i + " you got a D.")}
    if(i < 80 && i > 69){console.log("For " + i + " you got a C.")}
    if(i < 90 && i > 79){console.log("For " + i + " you got a B.")}
    if(i <= 100 && i > 89){console.log("For " + i + " you got an A.")}
}

