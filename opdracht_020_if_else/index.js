const age = (24);
const isFemale = false;
const driverStatus = "bob";
const name = "Sarah";
const totalAmount = (50);



/*age to get in club 18*/
if (age > 17) {

    console.log("Welcome in!");


} else {
    console.log("Stay out!");
}
/*child Discount*/

if (age > 17 && age < 25) {

    console.log("You get 50% discount!");
} else {
    console.log("you're old, you pay full!");

}
/*ladies night isFemale?*/
if (isFemale) {

    console.log("50% discount!");

} else {
    console.log("We are not gender-racist only someone has to pay the bills!  ");
}


/* bob?*/
if ("bob") {

    console.log("Drive save!");

} else {

    console.log("Do not drive!!!");
}
/*Is your name Sarah or Bram?*/

if ("Sarah" || "Bram") {

    console.log("Free beer!");
} else {

    console.log("You get none");
}

/*total amount goodies*/

if (totalAmount > 24.99 && totalAmount < 49.99) {

    console.log("Free Balls");

}else {

    console.log("");
}

if (totalAmount > 50 && totalAmount< 99.99) {

    console.log("Free Nachos! ");

} else {

    console.log("");
}
if (totalAmount >99.99) {

    console.log("Winner winner chicken diner, you get free champagne!!");

} else {

    console.log("");
}
/* code van Winc


if (age >= 18) {
  console.log("Je bent 18 jaar of ouder, je mag naar binnen");
} else {
  console.log("Nope, je mag niet naar binnen");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting op je biertje");
}

if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
  );
}

if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}

if (name === "Sarah" || name === "Bram") {
  console.log("Je naam is Sarah of Bram, je krijgt een gratis biertje!");
} else {
  console.log("Je doet niet mee aan onze ludieke Sarah Abraham actie");
}

if (totalAmount >= 100) {
  console.log("gratis flesje champagne.");
} else if (totalAmount > 50) {
  console.log("gratis portie nachos");
} else if (totalAmount > 25) {
  console.log("gratis (vega)bitterballen");
} else {
  console.log("Helaas geen korting, maar leuk dat je er bent");
}
*/