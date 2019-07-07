/* Problems
The output of the problems is written on a single line for brevity; your solutions will output each value on a new line like in the example above.

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
        console.log(j);
    }
}