/*section1


const check100 = function(sum100){ 
     const sum = (sum100 >= 100);
     if (sum){
       return "true";  
     }
     return "false" ;
};
const result = check100 (55);
const result2 = check100 (110);
console.log(result);
console.log(result2);

*/

/*section2

const brendaBouncer = function (maxPeople, peopleIn){

    const maxP = maxPeople + peopleIn;
     if (maxP <= 300){
       return "Come in!";  
     }
     return "To busy";
    };



 const brendaBouncerAge = function (age) {

    const age1 = age;
    if (age1 >= 18) {
        return " Youre old enough";
    }
     return " This is a club for adults";
};





    const result3 = brendaBouncer(250, 55,);
    const result4 = brendaBouncerAge(17);
    console.log(result3, result4);
*/


const averageOf = function (number1 ,number2 ,number3,number4, number5){

    const total= number1 + number2+ number3+ number4+ number5;
    const average= total / 5;
    const averageRounded = Math.round(average);
    return average;
};


console.log (averageOf (2, 4, 5, 6, 6));

