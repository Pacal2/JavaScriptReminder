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

var outsideVar = "Outside Variable";
function outsideVariableInsideFunction() {
	var outsideVar = "Inside Variable";
	return outsideVar;
}
console.log(outsideVariableInsideFunction());
console.log(outsideVar);

// Queues
function nextInLine(arr, item) {
	arr.push(item);
	return arr.shift();
}
var testArr = [1, 2, 3, 4, 5]

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Boolean values and what IF statement
function trueOrFalse (isItTrue) {
	if (isItTrue) {
		return "Yes, it's true";
	}
	
	return "No, it's false";
	
}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

function isItEqualToTen(val) {
	if (val == 10) {
		return "It's equal to ten.";
	} else {
		return "It's not equal to ten."
	}
}

console.log(isItEqualToTen(10));
console.log(isItEqualToTen(12));
console.log(12 == 10);
console.log(10 == 10);
console.log(10 > 9);
console.log(10 < 9);

/*
3 === 3 true
3 === "3" false
*/

function testLogicalAnd(val) {
	if (val <= 50 && val >=25) {
		return "Yes";
	} else {
		return "No";
	}
}
console.log(testLogicalAnd(40));

function teestElseIf(val) {
	if (val > 10) {
		return "Greater than 10"; 
	} else if (val < 5) {
		return "Smaller than 5";
	} else {
		return "Between 5 and 10";
	}	
}

// Switch statements
function caseInSwitch(val) {
	var answer = "";
	
	switch(val) {
		case 1:
			answer = "alpha";
			break;
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "gamma";
			break;
		case 4:
			answer = "delta";
			break;
		default:
			answer = "omega";
			break;
	}
	
	return answer;
}
console.log(caseInSwitch(1));
console.log(caseInSwitch(3));
console.log(caseInSwitch(5));

// Funtion returning booleans
function isLess(a, b) {
	return a < b;
}
console.log(isLess(10, 15));

// Function for diagonal
function ABDiagonal(a, b) {
	
	if(a < 0 || b < 0) {
		return undefined;
	}
	
	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Objects
var myDog = {
	"name": "Reksio",
	"legs": 4,
	"tails": 1,
	"best friends": ["Bumba", "Pampers"]
};
myDog.bark = "hau-hau";
delete myDog.bark;

var dogName = myDog.name;
console.log(dogName);
var dogFriends = myDog["best friends"];
console.log(JSON.stringify(dogFriends));

function checkObj(checkProp) {
	if (myDog.hasOwnProperty(checkProp)) {
		return myDog[checkProp];
	} else {
		return "Not Found";
	}
	return "Change me!";
}

console.log(checkObj("name"));

// Complex Objects
var myMusic = [
	{
	"artist": "Yes",
	"title": "Tales from Topographic Oceans",
	"release_year": 1973,
	"formats": [
		"CD",
		"8T",
		"LP"
	],
	"gold": false
	},
	{
	"artist": "Pink Floyd",
	"title": "Dark Side of the Moon",
	"release_year": 1973,
	"formats": [
		"CD",
		"8T",
		"LP"
	],
	"gold": true
	}
]

var secondFormat = myMusic[1].formats[1];
console.log(secondFormat);

var collection = {
	"2548" : {
		"artist": "Yes",
		"title": "Tales from Topographic Oceans",
		"release_year": 1973,
		"tracks": [
			"The Revealing Science of God",
			"The Remembering",
			"The Ancient"
		]
	},
	"2468" : {
		"artist": "Pink Floyd",
		"title": "Dark Side of the Moon",
		"release_year": 1973,
		"tracks": [
			"Breath",
			"Time",
			"Money"
		]
	},
	"2439": {
		"album": "Speaking in Tongues"
	}
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
	if (value === "") {
		delete collection[id][prop];
	} else if (prop === "tracks") {
		collection[id][prop] = collection[id][prop] || [];
		collection[id][prop].push(value);
	} else {
		collection[id][prop] = value;
	}
	return collection;
}
updateRecords(2439, "tracks", "Moon Rocks");
console.log(updateRecords(2439, "artist", "Talking Heads"));

// While loops
var i = 1;
var myArrayUsedInWhileLoop = [];
while(i < 6) {
	myArrayUsedInWhileLoop.push(i);
	i++;
}
console.log(myArrayUsedInWhileLoop);


// For loops
var myArrayUsedInForLoop = [];
for (var i = 0; i < 10; i += 2) {
	myArrayUsedInForLoop.push(i);
}
console.log(myArrayUsedInForLoop);

// Iteration through array
var myTotal = 0;
for (var i=0; i < myArrayUsedInForLoop.length; i++) {
	myTotal += myArrayUsedInForLoop[i];
}
console.log(myTotal);

// multi-dimensional arrays (iteration, loops)
function multiplyAll(arr) {
	var product = 1;
	
	for (var i=0; i < arr.length; i++) {
		for (var j=0; j<arr[i].length; j++) {
			product *= arr[i][j];
		}
	}
	
	return product;
}

var product = multiplyAll([[1, 2], [3,4], [5,6,7]]);

console.log(product);

// Do while loops
var thisArray = [];
var it = 10;

do {
	thisArray.push(i);
	it++;
} while (it < 5)
	
console.log(it, thisArray);
