// The postfix and prefix forms
// What are the final values of all variables a, b, c and d 
// after the code below?

let a = 1, b = 1; 
let c = ++a; // 2
let d = b++; // 1

alert(a);
alert(b);
alert(c);
alert(d);

let e = 2;

let x = 1 + (e *= 2);
alert("e should be " + e);  //should be 4
alert("x should be " + x)  //shoud be 5