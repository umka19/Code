/* 'use strict'

let showFunc;

if (2 > 1) {
	showFunc = function() {
		console.log('Сообщение');
	}
}
showFunc(); // Error (showMessage is not defined)

 */

/* function createMessage (text, name) {
	let result = text + "," + name + "!";
	return result;
}

function showMessage (text, name) {
	console.log(text, name);
}

function initMessage (text, name) {
	showMessage (createMessage(text, name));
}

initMessage("hello", "Misha"); */

/* function getSumm () {
	let numOne, numTwo, result;

	function getNumOne() {
		numOne = 15;
	}

	function getNumTwo() {
		numTwo = 5;
	}

	getNumOne();
	getNumTwo();


	if (numOne < 15) {
		result = (numOne + numTwo)
	} 
	else [
		result = (numOne - numTwo)
	]
	console.log(result);
}

getSumm(); */

/* "use strict"

let name;

if (2 > 1) {
	name = function () {
		console.log('test');
	}
	
}
name(); */

/* function calcSumm(numOne, numTwo, less, more) {
  result = numOne + numTwo;
  console.log(`Result is : ${result}`);
  if (result < 10) {
    less();
  } else {
    more();
  }
}

function firstNumber(num1) {
  return num1;
}

function secondNumber(num2) {
  return num2;
}

function less() {
  console.log("less than 10");
}

function more() {
  console.log("more than 10");
}

calcSumm(firstNumber(10), secondNumber(2), less, more);
 */

/* function getSumm (numOne, numTwo) {
	let numSumm = calcSumm(numOne, numTwo);

	console.log(numSumm);
}

function calcSumm (numOne, numTwo) {
	result = numOne + numTwo;
	return result;
}

getSumm(5, 10); */

//* 0 < 5, 5 + 2, result = 7.
//* 1 < 5, 7 + 2, result = 9.
//* 2 < 5, 9 + 2, result = 11.
//* 3 < 5, 11 + 2, result = 13.
//* 4 < 5, 13 + 2, result = 15.
//* 5 < 5, result = 15;
//* return result;

/*
function calcSumm (numOne, numTwo) {
	let result = 5;

	for (let i = 0; i < numTwo; i++) {
		result += numOne;
	}
	return result;
}
console.log(calcSumm(2,5)); */

/* 
function calcSumm (numOne, numTwo) {
	if (numTwo === 5){
		return numTwo;
	} else {
		return numOne * calcSumm(numOne, numTwo + 1);
	}
}
console.log(calcSumm(2,2)); */

/* let testFunction = function () {
  console.log("Test");
};

testFunction();

function calcSumm(one, two) {
  return one + two;
}

console.log(calcSumm(1, 2));
 */


let arrowFunction = (numOne, numTwo) => console.log(numOne + numTwo);

arrowFunction(1, 3);
