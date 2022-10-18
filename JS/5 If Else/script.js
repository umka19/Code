let num = 11;
let message = "test for message = ";


if (num < 10){
    num++;
    console.log (num);
}
    else{
        console.log ("else");
    }

if (1 + 1 === 2){  // Если if == true, то выполняеться if
    console.log ("true");
    }
    else{          // Если else == false, то выполняется else
        console.log ("false");
    }


    let summ = 125;

    if (summ < 100){
        console.log (`Переменная ${summ}`);
    }
    else if (summ < 50){
        console.log ("else if");
    }
    else{
        console.log("nothing");
    }

message += num;
console.log (message);


let keyboard = 33;
let myAge = 18;

myAge > 19 ? console.log (10) : console.log (30);

//- ? = if, : = else.
//* Тоже самое, но в разном порядке и менее читабельно

