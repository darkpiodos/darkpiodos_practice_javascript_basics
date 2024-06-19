// Javascript Overview

changeColor = (element) => {
  const currentColor = element.style.backgroundColor;
  if (currentColor == "red") {
    element.style.backgroundColor = "green";
  } else {
    element.style.backgroundColor = "red";
  }
};

// Display Date and Time

const triggerDate = document
  .getElementById("triggerDate")
  .addEventListener("click", function () {
    document.getElementById("displayDate").innerHTML = Date();
  });

//Change HTML Content

const changeHTMLContent = document
  .getElementById("changeHTMLContent")
  .addEventListener("click", function () {
    document.getElementById("changeContent").innerHTML = "See! It changed!";
    document.getElementById("changeContent").style.color = "red";
  });

//   Change HTML Attributes

const turnonBulb = document
  .getElementById("turnonBulb")
  .addEventListener("click", () => {
    document.getElementById("bulb").src = "./assets/pic_bulbon.gif";
  });

const turnoffBulb = document
  .getElementById("turnoffBulb")
  .addEventListener("click", () => {
    document.getElementById("bulb").src = "./assets/pic_bulboff.gif";
  });

//   Change CSS Styles

const changeCSSStyles = document
  .getElementById("changeCSSStyles")
  .addEventListener("click", function () {
    document.getElementById("changeCSS").style.fontSize = "32px";
  });

// Show and Hide Element

const hideHTMLElements = document
  .getElementById("hideHTMLElements")
  .addEventListener("click", function () {
    document.getElementById("divElements").style.display = "none";
    hiddenButton = document.getElementById("showHTMLElements").style.display =
      "block";
  });

const showHTMLElements = document
  .getElementById("showHTMLElements")
  .addEventListener("click", function () {
    document.getElementById("divElements").style.display = "flex";
  });

// Create Object and Display it

const person = {
  firstName: "Darwin",
  lastName: "Piodos",
  age: 23,
  eyesColor: "brown",
};

document.getElementById("objectElement").innerHTML =
  person.firstName +
  " " +
  person.lastName +
  " " +
  "is a" +
  " " +
  person.age +
  " " +
  "years old boy with" +
  " " +
  "big" +
  " " +
  person.eyesColor +
  " " +
  "eyes.";

//   Create Object using New Object

const vegetables = new Object();

vegetables.name = "Eggplant";
vegetables.color = "violet";
vegetables.vitamins = "C";
vegetables.stocks = 50;

const buttonVegetables = document
  .getElementById("buttonVegetables")
  .addEventListener("click", () => {
    document.getElementById("showVegetables").innerHTML =
      "An" +
      " " +
      vegetables.name +
      " " +
      "has" +
      " " +
      vegetables.vitamins +
      " " +
      "vitamins" +
      " " +
      "and" +
      " " +
      vegetables.color +
      " " +
      "in color" +
      "." +
      " " +
      "We have" +
      " " +
      vegetables.stocks +
      " " +
      "stocks available!" +
      " " +
      "<br/>" +
      "https://www.w3schools.com/js/js_object_method.asp";
  });

// Display Object Method using the button addEventListener

const bananas = {
  name: "bananas",
  color: "yellow",
  quantity: 20,
  isSweet: true,
  description: function () {
    return this.color + this.name;
  },
};
const objectMethod = document
  .getElementById("objectMethod")
  .addEventListener("click", () => {
    document.getElementById("displayObjectMethod").innerHTML =
      "I have" +
      " " +
      bananas.quantity +
      " " +
      bananas.color +
      " " +
      bananas.name +
      " " +
      "And yes" +
      " " +
      "its" +
      " " +
      bananas.isSweet +
      " " +
      "that its sweet" +
      " " +
      bananas.isSweet;
  });

let profile = {
  username: "darwin@gmail.com",
  password: "darwin123",
  role: "admin",
};

let text = "";
for (let x in profile) {
  text += profile[x] + " ";
}
document.getElementById("displayLoop").innerHTML = text;

const myArray = Object.values(profile);
document.getElementById("displayLoopTwo").innerHTML = text;

const myString = JSON.stringify(profile);
document.getElementById("displayLoopThree").innerHTML = text;

// Object Constructors

function Country(asia, america, africa, europe) {
  this.asianCountry = asia;
  this.americanCountry = america;
  this.africanCountry = africa;
  this.europeanCountry = europe;
}

const bucketList = new Country("Philippines", "Canada", "Cape Town", "Europe");

document.getElementById("objectConstructors").innerHTML =
  bucketList.asianCountry +
  " " +
  bucketList.americanCountry +
  " " +
  bucketList.africanCountry +
  " " +
  bucketList.europeanCountry;

// Arrays

const human = ["John", "Doe", 30];

const humanlength = human.length;

document.getElementById("arraysHuman").innerHTML =
  "Display it one by one" +
  " " +
  "</br>" +
  human[0] +
  "<br/>" +
  human[1] +
  "<br/>" +
  human[2] +
  "<br/>" +
  "Display it all in one(1) row: " +
  " " +
  human;

// Looping an array

const loveLanguage = ["Words of Affirmation", "Physical Touch", "Gift Giving"];
loveLanguage.push("Lust");
let loveLanguageCount = loveLanguage.length;

let display = "<ul>";
for (love = 0; love < loveLanguageCount; love++) {
  display += "<li>" + loveLanguage[love] + "</li>";
}
display += "</ul>";

document.getElementById("arraysFastfood").innerHTML = display;

// Nested Array | Object

let x = "";
const profilePerson = {
  name: "Darwin",
  age: 23,
  course: "BSIT",
  nationality: "Filipino",
  cars: [
    { name: "BMW", model: ["BM-1000", "MB-4000", "WD-30"] },
    { name: "Audi", model: ["Aud-CS", "C2-AUTH", "CarExt-10K"] },
    { name: "Ford", model: ["Forge-30", "Raptor 00", "Tenar-UX"] },
  ],
};

for (let i in profilePerson.cars) {
  x += "<h2>" + profilePerson.cars[i].name + "</h2>";
  for (let j in profilePerson.cars[i].model) {
    x += profilePerson.cars[i].model[j] + "</br>";
  }
}
document.getElementById("nestedArrayObject").innerHTML = x;

const displayEEvent = document
  .getElementById("displayEEvent")
  .addEventListener("click", (e) => {
    document.getElementById("printOutHere").innerHTML = e;
  });
