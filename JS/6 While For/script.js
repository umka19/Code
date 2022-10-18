let num = 10;
while (num < 50){
    console.log (num);
    num++;
}

console.log ("---------BREAK---------");

let sum = 10;

do{
    sum++;
    console.log (sum);
}
while (sum > 15);

console.log ("---------BREAK---------");

//* For 
/* for (Начало; Условие; Шаг;){
    Тело цикла
    Тут будет выполняться код
} */

for (let summSize = 0; summSize < 5; summSize++) {
    console.log (summSize);
}

console.log ("---------BREAK---------");

let minecraft = 0;

for (; minecraft < 10; ) {
    minecraft++;
    console.log (minecraft);
    if (minecraft == 2) break;
}
console.log (`Работа окончена на ${minecraft}`);


console.log ("---------BREAK---------");

let stone = 5;

for (; stone < 10;) {
    stone++;
    if (stone == 8) continue; // Возвращает к for и циклу 
    console.log (stone);
}

console.log ("---------BREAK---------");

/* firstFor: for (let numer = 0; numer < 3; numer++) {
    for (let size = 0; size < 5; size++) {
        if (size == 3) {
            break firstFor;
        }
        console.log (size);
    }
} */


/* 
    1) while
    2  do while
    3 for 
*/

/* console.log ("New Break");

let age = 18;

while (age < 20) {
    age++;
    if (age == 19) continue;
    console.log (age);
}

console.log ("break 2");

do {
    age++;
    console.log (`test ${age}`);
}
while (age <= 20)

console.log ("break 2");

 */

/* let keyNumber = 0; */

/* while (keyNumber < 6) {
    keyNumber++;
    console.log (keyNumber);
    if (keyNumber == 5) break;
}
 */

/* do {
    keyNumber++;
    console.log (keyNumber); 
}
    while (keyNumber < 5); */

/* let keyNumber = 0;

for (;keyNumber < 6; keyNumber++) {
    console.log (keyNumber);
} */

let qRush = 0;

while (qRush < 3) {
    qRush++;
    console.log (`Число: ${qRush}`);
}

//looking good for git hub


for (let green = 0; green < 2; green++) {
    if (green == 1) break;
    for (let purple = 0; purple < 3; purple++) {
    if (purple == 1) break;
    console.log (purple);
    }
}   