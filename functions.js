function sum(a,b){
    return a+b;
}
//functions same as C program.

//FUNCTION EXPRESSIONS:
// Create a function and put it into a variable. 
let funExp = sum(5,10);


//ANONYMOUS FUCTION:
var funExp1 = function(a,b){
    return a+b;
}
console.log(funExp1(5,10));
let sum1 = funExp1(5,10);
console.log('the sum of both number is'+ sum1);
// Since this function has no name, it is called anonymous function.
// The whole expression is called anonymous function expression.