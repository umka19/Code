let userInfo = {
  let: "Вася",
  for: 30,
  19: 20,
};
console.log(userInfo.let);
console.log(userInfo.for);
console.log(userInfo["19"]);

function createUserInfo(name, age, nickname) {
  return {
    name,
    age,
    nickname,
  };
}

function showMessage(text) {
  console.log(text);
}

showMessage(createUserInfo("Misha", 18, "umka191"));


