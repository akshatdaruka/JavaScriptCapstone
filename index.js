// 1.Ways to print in JAVASCRIPT 
// console.log("Hello World");
// alert("me");
// document.write("this is a document write");

// 2. JAVASCRIPT CONSOLE API:
// console.log("Hello World", 4 + 10, "another log");
// console.warn("this is a warning");
// console.error("this is an error");

// 3. Variables: Containers to store data values.
// var number1 = 34;
// var number2 = 46;
// console.log(number1+number2);

// 4. Data Types in JavaScript:

//Numbers
var num1=455;
var num2=56.78;

//Sring
var str1="This is a string";
var str2='This is also a string';

//Object: key value pair.
var marks={
    roger: 99,
    rafa: 98,
    novak: 97
}
// console.log(marks);

//Boolean
var a= true;
var b= false;
// console.log(a,b)

//Undefined: By default value of a variable is undefined.
var und1;
var und2=undefined;
// console.log(und1,und2);
var n=null;
// console.log(n);
//undefined and null are different from each other.
/* At very high level, there are 2 types of datatypes in JavaScript:
1.Primitive Data Type: Undefined, null, numbers, strings, boolean, symbol.
2.Reference Data Types: Arrays and Object */
var arr=[1,2,'java',4,5];
// console.log(arr);

/* Operators:
1. Arithmetic   + , - , * , /
2. Assignment   = , += , -+ , /= , *=
3. Comparison   == , >= , <= , > , < 
4.Logical       && , || , !
*/

//Functions:
function avg(a,b)
{
    return (a+b)/2;
}
// console.log(avg(5,21), avg(6,32));

/* Conditional Statement -
if(condition){statements}
else if (condition){statements}
else if (consition){ststements}
else {statements} */

// Loops : 
var arr1=[1,2,3,4,5,6,7];
// for(var i=0;i<arr1.length;i++)
// {
//     console.log(arr1[i]);
// }
// arr1.forEach(function(element){
//     console.log(element);
// })
let l1 = 0; // the scope of variables declared using let is within the function only.
const l2 =9; // the value of constant variables can't be changed once assigned.

//ARRAY METHODS:

let myArr = ["Fan","Camera",12,null,true];
// console.log(myArr.length);
myArr.pop(); // will remove one element from last.
myArr.push("Game"); // will add one element, i.e., game to the end of array.
myArr.shift(); // will remove one array from starting of array.
myArr.unshift("Music"); // will add one element to starting of array.)

//STRING METHODS IN JAVASCRIPT:

let myString = "Smells like teen spirit"
// console.log(myString.length);
// console.log(myString.indexOf("teen"));
// console.log(myString.slice(0,4)); // 0 is inclusive and 4 is exclusive.
// myString2= myString.replace("spirit","enthusiasm");
// console.log(myString2);

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.getMinutes());
// console.log(myDate.getTime());//this will give times in second.

//DOM(DOCUMENT OBJECT MODEL) MANIPULATION: 
// DOM have certain methods by help of which we can manipulate HTML 
document.getElementById('click').click();//this will click the click button of the page.
document.getElementById('click').style.border='2px solid blue';
//so we can dynamically chage the content of our page with JavaScript.
let elem= document.getElementById('click');
// console.log(elem);
let elem1 = document.getElementsByClassName('container');
// console.log(elem1);
// elem1[0].style.background="yellow";
elem1[0].classList.add('bg-primary');//add another class to element.
elem1[0].classList.remove('bg-primary');//will remove a class from element.
// console.log(elem1[0].innerHTML);//will give the html inside elem1[0].
tn=document.getElementsByTagName('div');
// console.log(tn);
createdElement = document.createElement('p'); //new element that is para in this case
createdElement.innerText ="This is a created para" //we will add this text to para element
tn[0].appendChild(createdElement);//will add created element to tn[0].
createdElement2 = document.createElement('b'); 
createdElement2.innerText ="This is a created bold";
tn[0].replaceChild(createdElement2,createdElement);//replace child createdElement with createdElement2.
// removeChild(element)---> will remove element.

//SELECTING USING QUERRY:
sel= document.querySelector('.container');
// console.log(sel);
sel1 = document.querySelectorAll('.container');
// console.log(sel1);

//EVENTS IN JAVASCRIPT:
/*we added a function in HTML click Element named clicked stating that if anyone click at that 
element this function clicked() is called.*/
 function clicked(){
     console.log("this element was clicked.");
 }
// window.onload=function(){
//     console.log("the document was loaded");
// }
// firstContainer.addEventListener('click',function(){
//     console.log("clickedddd");
// })
// let preHtml=document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseover',function(){
//     document.querySelectorAll('.container')[1].innerHTML=preHtml;
//     console.log("mouse was taken over firstConatiner");
// })
// firstContainer.addEventListener('mouseout',function(){
//     document.querySelectorAll('.container')[1].innerHTML='<b>We have Clicked</b>';
//     console.log("mouse was taken out of the first container");
// })
// firstContainer.addEventListener('mouseup',function(){
//     console.log("mouse up when clicked on first container");
// })
// firstContainer.addEventListener('mousedown',function(){
//     console.log("mouse down when clicked on first container");
// })
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML='<b>We have Clicked</b>';
// })

//SET TIMEOUT AND SET INTERVAL :

//ARROW FUNCTION:
// function summ(a,b){
//     return a+b;
// }
//the above code can be written as:
summ=(a,b)=>{
    return a+b;
}
jog=()=>{
    console.log('set interval in jog function');
}
// setInterval(jog,2000);//jog function will be repeatedly executed in interval of 2000 millisecond.
// setTimeout(jog,3000);//jog function will be executed only once after 3000 milliseconds of reload.

//to stop setInterval:
// clr=setInterval(jog,3000);//setinterval will return an id to clr
// clearInterval(clr);//this will stop clr.

//To clear setTimeout we can use clearTimeout.

//LOCAL STORAGE:
// localStorage.setItem('music','nirvana');//will set local storage in key value pair.
// localStorage.getItem('music');//will fetch local storage.
// localStorage.removeItem('music');
// localStorage.clear();//will clear local storage.
//JSON(JAVASCRIPT OBJECT NOTATION):
obj3 = {music: 'gunsnroses', length: 1, a:{this: 'that'}};
jso=JSON.stringify(obj3);
// console.log(jso, typeof(obj3), typeof(jso));
//JSON Standards require double quotes only not single quotes.
//However javascript objects accept single and double quotes both.
parsed=JSON.parse(`{"music":"gunsnroses","length":1,"a":{"this":"that"}}`);
//we will pass valid json string inside parse function.
// console.log(parsed);

//TEMPLATE LITERALS- BACKTICKS:
let v=34;
// console.log(`this is my backticks ${v}`);//${v} will be replaced by variable v;
let g=66;
// console.log(`${v+g}`);//sum of v and g;


// To take user input:
// let q = prompt('Enter a number');
// document.getElementById('firstContainer').innerText=q;

//NAMING CONVENTION:
// 1.First character must be a letter or undescore or dollar sign.
// 2.The rest of the variable can contain any letter numbers or underscore. 
// 3.Variables are case sensitive.
