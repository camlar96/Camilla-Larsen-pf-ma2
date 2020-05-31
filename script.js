// question 1
var petArray = ["cat", "cow", "dog"];

//question 2
console.log(petArray[1]);

//question 3
petArray.push("sheep");

//question 4
var numbersOfPets = petArray.length;
console.log(numbersOfPets);

//question 5
var catObject = {
  name: "pippo",
  colour: "black",
  age: 3,
};

//question 6
console.log(catObject.age);

//question 7
var catArray = [
  {
    name: "pippo",
    colour: "black",
    age: 3,
  },
];

//question 8
for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i]);
}

//question 9
function logToConsole(logArgument) {
  console.log("My favourite animal is the " + logArgument);
}

//question 10
logToConsole("donkey");

