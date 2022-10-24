// Objects

// Example

/* let test = "javascript";
let firstPart = "likes";
let testTwo = "test";

let userInfo = {
  name: "Misha",
  lastName: "Shtein",
  age: 18,
  "my Name Eng": "Michael",
  [firstPart + " javascript"]: true,
  [test]: test,
  [testTwo]: 2 + 2,
};

console.log(userInfo.name, userInfo.age);
console.log(userInfo["my Name Eng"]);
console.log(userInfo["name"]);
console.log(userInfo[test]);
console.log(userInfo["likes javascript"]);
console.log(userInfo[testTwo]);

let key = "age";
console.log(userInfo[key]); */
// console.log(userInfo.key); - Undefined

/* function clearConsole() {
  console.clear();
}
setTimeout(clearConsole, 5000); */

/* let testInfo = {
  person: {
    myName: "Michael",
    myAge: 18,
  },
};
console.log(testInfo.person);
console.log(testInfo.person.myAge);

function makeUserInfo(name, age, street, number) {
  return {
    name: name,
    age: age,
    address: {
      street: street,
      number: number,
    },
  };
}

let user = makeUserInfo("Misha", 18, "Shevchenko st.", 15);

console.log(user.address); */

/* let userInfo = {
  name: "Misha",
  lastName: "Shtein",
  address: {
    city: "Kyiv",
    street: "Freedom",
  },
};

for (let key in userInfo) {
  console.log(key); // Showing (name, lastname, address not value of them!)
  console.log(userInfo[key]); // Showing value of variables (Misha, Shtein...)
}

console.log("---Break between---");

for (let key in userInfo.address) {
  console.log(key);
  console.log(userInfo.address[key]);
}
 */

/* let testShow = {
  name: "Misha",
  "call me": "Shtein",
  adress: {
    city: "Kyiv",
    street: "Freedom",
  },
  showInfo() {
    console.log(`${testShow.name}, ${testShow["call me"]}, ${testShow.adress}`);
  },
};

let user = testShow;

user.showInfo();
 */

/*let testShow = {
  name: "Misha",
  "call me": "Shtein",
  adress: {
    city: "Kyiv",
    street: "Freedom",
  },
  showInfo() {
    console.log(`${this.name}, ${this["call me"]}, ${this.adress}`);
  },
};

let user = testShow;
testShow = null;

user.showInfo(); */
 

/*  function UserInfo(name) {
  //With capital letter ( Object )
  this.name = name;
  this.age = 18;
}

console.log(new UserInfo("Misha"));
console.log(new UserInfo("Shtein")); 
 */

// Задача №8
/*
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
*/

let userInfo = {};

userInfo.name = "Misha";
console.log(userInfo.name);

userInfo.age = 18;
userInfo.name = "Lena";
console.log(userInfo.name);

delete userInfo.name;

console.log(userInfo.name);
