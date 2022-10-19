// First - how to create a function
function showMessage() {
  console.log("Hello from my function");
}
showMessage(); // How to call a function (if i need output)

// Function getSumm (i have arguments; numOne and numTwo
//- i can give them a value but if not it will be a 1 and 5)
function getSumm(numOne = 1, numTwo = 5) {
  summResult = numOne + numTwo;
  console.log(`Result of getSumm = ${summResult}`);
}
getSumm(10, 5);

if (true) {
  function showResult(num1, num2) {
    function getNum1() {
      num1 = 5;
    }

    function getNum2() {
      num2 = 10;
    }

    getNum1();
    getNum2();

    let getShowResult = num1 * num2;
    console.log(`My result ${getShowResult}`);
  }
}
showResult();

// Inside variable
let insideVariable;

function setInsideVariable() {
  insideVariable = "Hello, i am inside Variable";
}
setInsideVariable();
console.log(insideVariable);

//* Variables !
// variables in functions (in blocks) - inside
// variables out functions (blocks) - local
// variables out all blocks (in whole code) - global

function calcSumm(numOne, numTwo) {
  console.log(`Variable numOne: ${numOne}`);
  console.log(`Variable numTwo: ${numTwo}`);
  if (numTwo === 15) {
    numTwo = numTwo - 10;
  }
  function getSumm() {
    getResult = numOne + numTwo;
  }
  getSumm();
  console.log(` Result is : ${getResult}`);
}
calcSumm(5, 15);

console.log("---Break---");

//* Good example of function and giving a value with a other functions

function calcAllSumm(numOne, numTwo, more, less) {
  numSumm = numOne + numTwo;

  if (numSumm > 10) {
    more();
  } else {
    less();
  }
}

function resultMore() {
  console.log("Result more 10");
}

function resultLess() {
  console.log("Result less then 10");
}

calcAllSumm(1, 10, resultMore, resultLess);

// break

console.log("------BREAK again------");

function testSumm(numOne, numTwo) {
  let testSummResult = numOne + numTwo;

  return testSummResult;

  if (true) {
    console.log("true");
  } else {
    console.log("else");
  }
}

let funcResult = testSumm(1,3);

console.log(`Result of variable which is = function testSummResult : ${funcResult}`);
