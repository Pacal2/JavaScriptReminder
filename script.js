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
var thisStrLastLetter = thisStr[thisStrLength-1];
console.log(thisStrLastLetter);

// Functions
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	
	var result = "";
	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
	return result;
		
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("cat", "small", "sneaked", "slowly"));

// Arrays
var myArray = ["Pacal", 28];
console.log(myArray);
var myData = myArray[0];
console.log(myData);
myArray[1] = 82;
console.log(myArray);

// Multi-dimensional arrays
var myMultiDimArray = [[1, 2, 3], [4, 5, 6], [7,8,9]]
var getMultiDimData = myMultiDimArray[0][0];

// Adding data to arrays
myArray.push("Green");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift("Pacal");
console.log(myArray);

// Global variables (no var in function or var outside function)
var varGlobal = 10;
function function2() {
	globalVar = 5;
}

function functionUsingGlobal() {
	var output = varGlobal + 20;
	console.log(output);

}
functionUsingGlobal();
