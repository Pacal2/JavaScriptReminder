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

// Profile lookup

var contacts = [
	{
		"firstName": "Thomas",
		"lastName": "Pynchon",
		"number": "88585858",
		"works": ["Gravit's Rainbow", "The Crying of Lot 40", "V."]
	},
	{
		"firstName": "Masaaki",
		"lastName": "Yuasa",
		"number": "88585859",
		"works": ["Kaiba", "Tatami Galaxy", "Mind Game"]
	},
	{
		"firstName": "Alejandro",
		"lastName": "Jodorowsky",
		"number": "88585860",
		"works": ["Incal", "Metabarons", "El Topo"]
	},
	{
		"firstName": "Terry",
		"lastName": "Gilliam",
		"number": "88585861",
		"works": ["Brazil", "12 Monkeys", "Fear and Loathing in Las Vegas"]
	},
	{
		"firstName": "Olivier",
		"lastName": "Ledroit",
		"number": "88585862",
		"works": ["Vampire Requiem Chevalier", "Wika", "Black Moong Chronicles"]
	},
	{
		"firstName": "Christopher",
		"lastName": "Avellone",
		"number": "88585863",
		"works": ["Planescape: Torment", "Fallout 2", "KOTOR II: The Sith Lords"]
	}

];

function lookUpProfile(name, prop) {
	for (var i = 0; i < contacts.length; i++) {
		if(contacts[i].firstName === name) {
			return contacts[i][prop] || "No such property";
		}
	}
	
	return "No such contact";
}

var profileData = lookUpProfile("Thomas", "works");
console.log(profileData);

var nonExistantProfileData = lookUpProfile("Thomas", "address");
console.log(nonExistantProfileData);

// Random numbers

console.log(Math.floor(Math.random()*10));

function randomRange(minRandom, maxRandom) {
	return Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
}
console.log(randomRange(26, 48));

// Parsing to int
var stringNumberA = "16";
var stringNumberB = "12";
console.log(stringNumberA+stringNumberB);
var stringNumberA = parseInt(stringNumberA);
var stringNumberB = parseInt(stringNumberB);
console.log(stringNumberA+stringNumberB);

// Converting from one base to another
var binaryNumber = "10101";
console.log(parseInt(binaryNumber, 2));

// Conditional operater (used instead of if else)
// condition ? statement-if-true : statement-if-false;
function checkIfEqual(a, b) {
	return a === b ? true : false;
}

console.log(checkIfEqual(1, 2));
console.log(checkIfEqual(2, 2));

// Nested conditional operators
function checkIfPositiveZeroOrNegative(num){
	return num > 0 ? "positive" : (num < 0 ? "negative" : "zero");
}

console.log(checkIfPositiveZeroOrNegative(-2));
console.log(checkIfPositiveZeroOrNegative(0));
console.log(checkIfPositiveZeroOrNegative(4));

// let - can't declare the variable two times
// const - can't reassign value

// Mutating a const array
const s = [5, 7, 2]
function editInPlace() {
	"use strict";
	
	//s = [2, 5, 7];
	s[0] = 2
	s[1] = 6;
	s[2] = 7;
}
editInPlace();
console.log(s);

// Prevent object mutation
function freezeObj() {
	"use strict";
	const MATH_CONSTANTS = {
		PI: 3.14
	};
	
	Object.freeze(MATH_CONSTANTS);
	
	try {
		MATH_CONSTANTS.PI = 99
	} catch( ex ) {
		console.log(ex);
	}
	return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

// Arrow functions
const arrowFunction = () => new Date();

// Arrow functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// Higher order arrow functions
// part.1
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
	const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
	
	return squaredIntegers
	
}

const squaredIntegers = squareList(realNumberArray);
console.log("Squared integers " + squaredIntegers);


// part.2
const increment = (function() {
	return function increment (number, value = 1) {
		return number + value;
	};
})();
console.log(increment(5, 2));
console.log(increment(5));

// Rest operator(...)
const sumFunction = (function() {
	return function(...args) {
		//const args = [x, y, x];
		return args.reduce((a, b) => a + b, 0);
	};
})();
console.log(sumFunction(1, 2, 3));
console.log(sumFunction(1, 2, 3, 4));
console.log(sumFunction(1, 2, 3, 4, 5));

// Spread operator
const spreadArr1 = ["apple", "tomato", "banana", "carrot"];
let spreadArr2;
(function() {
	spreadArr2 = [...spreadArr1];
	spreadArr1[0] = "potato";
})();
console.log(spreadArr1);
console.log(spreadArr2);

// Destructuring asignements.
var voxel = {x: 3.6, y: 7.4, z: 6.54};

// Traditional way to asign values:
var xVoxel = voxel.x;
var yVoxel = voxel.y;
var zVoxel = voxel.z;

const { xVoxel : aVoxel, yVoxel : bVoxel, zVoxel : cVoxel } = voxel;

const AVG_TEMPERATURES = {
	today: 27.5,
	tomorrow: 27
}

function getTempOfTomorrow(avgTemperatures) {
	"use strict";
	
	const { tomorrow: tempOfTomorrow } = avgTemperatures;
	
	return tempOfTomorrow;
}

console.log(getTempOfTomorrow(AVG_TEMPERATURES));

// Destructuring Assignement with Nested Objects
const LOCAL_FORECAST = {
	today:  {min: 22, max: 28.7},
	tomorrow: { min: 23.2, max : 27 }
};

function getMaxOfTomorrow(forecast) {
	"use strict";
	
	const { tomorrow : { max : maxOfTomorrow} } = forecast;
	
	return maxOfTomorrow;
}

console.log(getMaxOfTomorrow(LOCAL_FORECAST));

//Destructuring to assign array variables
const [zAssigned, xAssigned, , yAssigned] = [1, 2, 3, 4, 5, 6];
console.log(zAssigned, xAssigned, yAssigned);

let aAssigned = 8, bAssigned = 6;
(() => {
	"use strict";
	[a, b] = [b, a];
})();
console.log(aAssigned);
console.log(bAssigned);

// Destructuring with the rest operator.
const sourceArray = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
	const [ , , ...arr] = list;
	
	return arr;
}

const arrayForDestRestTest = removeFirstTwo(sourceArray);
console.log(arrayForDestRestTest);
console.log(sourceArray);

// Destructuring assignements to pass objects as function's parameters
const stats = {
	max: 56.78,
	standard_deviation: 4.34,
	median: 34,
	mode: 23.87,
	min: -0.75,
	average: 35.85
};

const half = (function() {
	
	return function half({max, min}) {
		return(max + min) / 2.0;
	};
})();

console.log(stats);
console.log(half(stats));

// Template literals
const person = {
	name: "Paul Atreides",
	age: 24
};

const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`;

console.log(greeting);

const resultForTempList = {
	success: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["id-blacklist", "no-dup-keys"]
}

function makeListforTemLit(arr) {
	const resultDisplayArray = [];
	
	for (let i = 0; i <arr.length; i++) {
		resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
	}
	
	return resultDisplayArray;
}

const resultDisplayArray = makeListforTemLit(resultForTempList.failure);
console.log(resultDisplayArray);

// Object literal declarations using simple fields
const createPerson = (name, age, gender) => ({name, age, gender});

console.log(createPerson("Paul Atreides", 24, "male"));

// Concise declarative dunctions
const bicycle = {
	gear: 2,
	setGear(newGear) {
		"use strict";
		this.gear = newGear;
	}
}

bicycle.setGear(3);
console.log(bicycle.gear);

// Class Syntax for Constructer functions
class spaceShuttle {
	constructor(targetPlanet) {
		this.targetPlanet = targetPlanet;
	}
}

var zeus = new spaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

// Using getters and setters to Control Access to an Object
class  Book {
	constructor(author) {
		this._author = author;
	}
	// getter
	get writer(){
		return this._author;
	}
	// setter
	set writer(updatedAuthor){
		this._author = updatedAuthor;
	}
}

function makeClass() {
	class Thermostat {
		constructor(temp) {
			// Farenheit  to Celcius
			this._temp = 5/9 * (temp -32);
		}
		get temperature() {
			return this._temp;
		}
		set temperature(updatedTemp) {
			this._temp = updatedTemp;
		}
	}
	
	return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

// Differences between import and require
const stringFunction = require('./string_function');

const capString = stringFunction.capitalizeString("hello!");
console.log(capString);


// Testing node.js
console.log(global.temp);

//console.log(module);
//const logger = require('./logger');
//logger.log('message');

// Path module
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

// Operating System module
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total memory: ' + totalMemory);
console.log(`Total memory: ${freeMemory}`); 

// File System module
const fs = require('fs');

//const files = fs.readdirSync('./');
///console.log(files);

fs.readdir('./', function(err, files) {
	if (err) console.log('Error', err);
	else console.log('Result', files);
	
});

// Event module
const EventEmitter = require('events');

const Logger = require('./logger')
const logger = new Logger();

// Register a Listener
logger.on('messageLogged', (arg) => {
	console.log('Listener called', arg);
});

logger.log('message');

// HTTP module
const http = require('http');


//server.on("connection", (socket) => {
//	console.log("New connection...");
//});

const server = http.createServer((req, res) => {
	if(req.url === '/') {
		res.write("Hello");
		res.end();
	}
	
	if(req.url === '/api/courses') {
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	}

});



server.listen(3000);

console.log("Listening on port 3000");

