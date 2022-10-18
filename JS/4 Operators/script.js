let x;

x = 26 % 5;
console.log (`Результат x: ${x}`);

x = 25 **2;
console.log (`Результат степени x: ${x}`);

let resultOne = "" + 58; // Если 1 операнд строка, то будет строка
console.log (resultOne);
console.log (typeof resultOne);

let resultTwo = "58" + 2; //с плюсом будет строка 
console.log (resultTwo);
console.log (typeof resultTwo);


resultTwo = "58" - 2; // с -, *, /, % и тд будет number 
console.log (resultTwo);
console.log (typeof resultTwo);


let users = "19";
let admins = "74";

console.log (users + admins);
console.log (+users + +admins);// Преобразование в число, коротокой записью

console.log (Number(users) + Number(admins)); // Преобразование в число, длинной записью


let a = 10;
let b = 20;

let result = 10 * (b + 30);
console.log (result + 10);


let y = 10;

y = y + 10;

y = y + 10;

console.log (y);

// Инкремент
let Increment = 1;
Increment++;
console.log (Increment);

// 2-ой вариант
Increment += 1;
console.log (Increment);

// Декремент
let Discrement = 5;
Discrement--;
console.log (Discrement);

// 2-ой вариант
Discrement -= 1;
console.log (Discrement);


//* Постфиксная форма 
Increment++;
Discrement++;

//* Префиксная форма
++Increment;
++Discrement;

//Примеры 
let addUser = 0;
let addUserTwo;
addUserTwo = addUser++;
console.log (addUserTwo);

let newUser = 0;
let newUserTwo;
newUserTwo = ++newUser;
console.log (newUserTwo);

let keyboard;
keyboard = (15 + 5, 10 + 5);
console.log (keyboard);

/* Больше: a > b
Меньше: a < b
Больше или равно: a >= b
Меньше или равно: a <= b
Равно: a == b
Не равно: a != b
Строгое равно: a === b
Строгое не равно: a !== b */

console.log (2 < 5);
console.log (2 > 5);
console.log ("1" == 1);
console.log ("1" === 1);

let resultTrue = 10 > 1;
console.log (resultTrue);



/* Сравнение строк

Алфавитный порядок
console.log('Б' > 'А');

Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

Кол-во символов
console.log('Слайдер' > 'Слайд');

Регистр
console.log('Фрилансер' > 'фрилансер');
 */
console.log ("---------------------");
console.log ('Д' > 'Ж');
console.log ('Прив' < 'Привет');
console.log ('Тест' > 'тест');
console.log ('Абрикос' < 'Брикос');
console.log ('Абрикос' < 'брикос');

console.log ('----2');
console.log ("5" < 10);

console.log (true == 1);
console.log (false == 0);

console.log ("|| or ");
console.log (false || true);
console.log (false || false || true);
console.log (false || false);

let gym = 0;
let hall = 5;
gym == 5 || gym--;
console.log (gym);

console.log ("----------&&");
console.log (false && true);

console.log ("------");
console.log (1 && 0 || 3 && 4);

console.log (!1);
console.log (!"text");
console.log (!!"text");
console.log (Boolean("text"));

let lastNameForToday = "Yes, sir!";
console.log (lastNameForToday ?? "Нету значения");                  

console.log ('35' * '22');
console.log ('558' > 558);

let home = 0;
let homeWork = home++;
console.log (homeWork);


console.log(!false && 11 || 18 && !'');

let nameX = null;
console.log(nameX ?? "Без имени");