
const theAge =function(age) {
  console.log("the age is.."+ age)
  let ageIs =(age >=18);
  if (ageIs){
  return console.log( "  true"); 
}return console.log( "  false");
}
theAge(18);

const greetsAge = function(age){
  if (theAge >= 18){
    return console.log( "Hello There")
  } return console.log("Hey kiddo")
}
greetsAge(18)




const calculateVAT = function(basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function(basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21)); 
console.log(calculatePriceIncludingVAT(2, 9)); 


const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); 
console.log(calculateBasePriceAndVAT(2.18, 9)); 