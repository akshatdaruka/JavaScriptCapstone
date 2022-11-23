// CODE EXAMPLES:
// console.log(10+"20"); --> output= 1020;
// console.log(9-"4"); --> output=5;(bug, no logic);
// console.log("string1"-"string2"); --> output=NaN;
// console.log(true+true); --> output=2;(true-1 false-0);
// x=null; console.log(typeof(x)); --> output=object; (bug);

/*NaN:
NaN is a property of global object. It is a variable in global scope. 
initial value of NaN is Not-A-Number. 
isNaN(123)-false;
isNaN('adc')-true;
NaN===NaN-false;
Number.NaN===NaN-false;
isNaN(NaN)-true;
isNaN(Number.NaN)-true;
Number.isNaN(NaN)-true;
*/


/*Diffrence between == and === :
var a = 15 ;
var b = '15';
console.log(a==b); --> True (only checks value not datatype);
console.log(a===b); --> False (checks for datatype also);*/


/* What is Truthy and Falsy values in JavaScript:
There are 5 falsy value in javascript: 0,"",undefined,null,NaN, false is false anyways.*/

