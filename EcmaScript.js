// JavaScript was founded in 1996 and since it was becoming more and more popular
// it was submitted to ECMA to standardize it and to give it an official and authorized 
// stand, then it came to be known as ECMAScript. Since then many new versions of
// ECMAScript was released. The version of ECMAScript released in 2015 known as ES6,
// became very popular due to lots of new features in ES6. Since then every year new
// versions of ES is releasing. The latest for now is ES11 released in year 2020.

//ECMAScript2015 or ES6(ECMAScript 6th Edition):
// Some Features Introduced:
// 1. Let and Const 
// 2. Template Strings
// 3. Default Arguments
// 4. Destructig
// 5. Object Properties
// 6. Arrow Function
// 7. Rest and Spread Operators.


/* LET AND CONST:
VAR- FUNCTION SCOPE 
LET AND CONST- BLOCK SCOPE 
*/


// TEMPLATE LITERALS(TEMPLATE STRINGS):
for(let num =1 ;num<=10;num++)
{
    let tableOf = 12;
    console.log(tableOf + "*" + num + "=" + tableOf*num);
   // above code can be written as:
    console.log(` ${tableOf} * ${num} = ${tableOf*num} `);
}


/* DEFAULT PARAMETERS:
Default function parameters allows named parameters to be initialized with default
values if no values or undefined is passed.
*/
function mult(a,b=5)
{
    return a*b;
}
console.log(mult(3));  //--> Output: 15.


//ARROW FUNCTION:
// function summ(a,b){
//     return a+b;
// }
//the above code can be written as:
summ=(a,b)=>{
    return a+b;
}
console.log(summ(5,6));
// We should define the fat arrow function before calling it.
// We can write above function in one line as wee:
summ=(a,b)=> `sum of 2 number is ${a+b}`;
console.log(summ(2,3));