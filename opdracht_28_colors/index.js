/*
let Colors = ["yellow", "blue", "red", "orange"];


while (Colors === ("orange")) {

  console.log("your color is not orange but " + ("yellow"));
  console.log("your color is not orange but " + ("blue"));
  console.log("your color is not orange but " + ("red"));

  Colors++;
}
console.log("the color is " + ("orange"));

for (Colors; Colors.length; Colors++) {



  console.log("your color is not orange but " + ("yellow"));
  console.log("your color is not orange but " + ("blue"));
  console.log("your color is not orange but " + ("red"));
}
console.log("the color is " + ("orange"));

*/



/*
Colors.forEach(element => console.log(("this is the color  ") + element));

*/



/*
  
const myColorArray = ["yellow", "blue", "red", "orange"];

// oude manieren
let i = 0;
while (i < myColorArray.length) {
  console.log(myColorArray[i]);
  i++;
}

for (let i = 0; i < myColorArray.length; i++) {
  console.log(myColorArray[i]);
}

// nieuwe manier met forEach
myColorArray.forEach((color) => console.log(color));

// 1. Mijn for loop is 3 regels, mijn while loop is 5 regels
// 2. ForEach method is (met een arrow function), 1 regel.
// 3. Een array method heeft een aantal voordelen:
// --> je kunt niet meer verstrikt raken in een infinite loop.
// --> je hoeft niet meer bij te houden met een i, bij welke iteratie je bent.
// --> je hebt direct toegang tot het item waar je overheen loopt dmv het argument en de callback-functie die je de array-method geeft als argument.
// --> de naam "forEach" zegt ook meteen wat je gaat doen en is semantischer dan een while of for loop.

const myColors = {
  colorWall: "blue",
  colorFruit: "orange",
  colorCar: "red",
  colorHair: "white",
  colorGras: "green",
};

for (x in myColors) {
  console.log(myColors[x]);
}*/