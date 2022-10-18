//* Variables

/* let myName;
console.log (myName);

myName = 'Misha 1';
console.log (myName);

let myAge = '18';
console.log (myAge);
 */

/* let myName = 'Misha',
    myAge = 18,
    myHeight = '192';
    console.log(myHeight) */

/* let myName = 'Misha';

let myAge = 18

let myHeight = '192';

console.log (myName);

myHeigh = '195';

let test1 = 'test1';

let test2 = 'test2';

test1 = test2;

console.log (test1); */

//! Главное отличие let между const это - констант, жестко заданая, неизменная переменная.

//* Имена констант, которые известны заранее записываем верхним регистром

const MY_MALE = 'Male';
const MY_HAIRS_BLACK = 'Black';

//* Именна константа, которые нам не известны заранее пишем методом lowerCamelCase

const summSizes = 25 + 25;

console.log (summSizes);

//*Создаю const группу/блок с несколькими данными
const personalInfo = {
    user: 'umka19',
    password: '12345',
    game: 'Cs:Go'
}
console.log (personalInfo);

//* Меняю одно значение у блока, который был создан заранее 
personalInfo.game = 'Dota 2';
console.log (personalInfo);
console.log (personalInfo.game);

// Домашка 

let eyeColor = 'green';

let userName = 'Вася';

let user = userName;
console.log (user);