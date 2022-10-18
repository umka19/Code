//* Data types 


// Data types - 
/* 
Undefined = undefined (cant get it or nothing)
Null = null 
Boolean = true or false
Number
BigInt
String
Symbol

Infinity and -Infinity (typeof number)

NaN - Cant do any math procces with that, example : "Test" / 25 = NaN 
(Cant divide string on nubmer)

BigInt

object and function 
*/

// undefined
let userName;
console.log (userName);
console.log (typeof userName);

//null
let user = null;
console.log (user);
console.log (typeof user);

//Boolean
let imLucky = false;

if (imLucky) {
    console.log ('Lucky');
}   
    else{
    console.log ('not lucky');
    }
    console.log (imLucky);
    console.log (typeof imLucky);

//Boolean #2

let trueOrFalse = 19 < 9;
console.log (trueOrFalse);
console.log (typeof trueOrFalse);

//Nubmer
let myNubmer = 19;
console.log (myNubmer);
console.log (typeof myNubmer);

let myAge = 18;
console.log (myAge);
console.log (typeof myAge);

//Infinity and -Infinity (typeof number)
let getInfinity = 25 / 0;
console.log (getInfinity);
console.log (typeof getInfinity);

let getNegativeInfinity = -25 / 0;
console.log (getNegativeInfinity);
console.log (typeof getNegativeInfinity);

//NaN 
let getNan = 'imNan' * 85;
console.log (getNan);
console.log (typeof getNan);

//BigInt
const bigInteger = 913893823829329039959540541231233n;
console.log (bigInteger);
console.log (typeof bigInteger);

//String
let getString = 'Test string'; // '' = "" , but `` not, here is an example down (orange color) 
console.log (getString);
console.log (typeof getString);

let age = 25;

let userAgeInfo = `Age: ${age}`; //todo example here ``
console.log (userAgeInfo);


//Objects

let myInfo = {
    name: 'Misha',
    lastName: 'Shtein'
}
console.log (myInfo);
console.log (typeof myInfo);

//How to change data type

let numbers = 91;
console.log (numbers);
console.log (typeof numbers); 

numbers = String(numbers);
console.log (numbers);
console.log (typeof numbers); 


let userAge = 15;
console.log (userAge);
console.log (typeof userAge); 

userAge = String(userAge);
console.log (userAge);
console.log (typeof userAge); 

let alpha = "72" / "3";
console.log (alpha);
console.log (typeof alpha); 


