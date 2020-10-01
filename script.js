// Data Types:
// You can use through whole program
var myName = "Jacek";
myName = 8;
// Only used in the scope of where you declare it
let ourName = "Pacal";
// Variable can't change
const pi = 3.14;

// Declaring variables vs. assigning variables:
var a;
var b = 2;
console.log(a);
a = 7;
b = a;
console.log(a);

// Initializing variables with asignement operator
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";


// Adding, subtraction, multiplication
var sum = 10 + 10;
var difference = 45-33;
var product = 8 * 10;
var quotient = 66/33;
console.log(sum);
console.log(difference);

// Incrementation
var myVar = 87;
myVar++;
myVar--;
var decimal = 5.7;
var remainder = 11 % 3;
var e = 3;
e += 12;
e -= 12;

// Strings
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
var thisStr = "I come first. " + "I come second.";
console.log(thisStr);
var thisStrLength = thisStr.length;
console.log(thisStrLength);
var thisStrFirstLetter = thisStr[0];
console.log(thisStrFirstLetter);