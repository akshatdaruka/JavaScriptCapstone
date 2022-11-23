// What is Object Literal :
// It is simply a key:value pair data structure. 


// Storing variables and function together in one conatiner,
// we can refer this as an Objects.


// How to make an Object:

// 1st way:

// let bioData = {
//     myName: 'Akshat',
//     myAge : 20,
//     getData : function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName);
// bioData.getData();

// 2nd way:

// let bioData = {
//     myName: 'Akshat',
//     myAge : 20,
//     getData(){   // we don't have to write 'function' after ES6 
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName);
// bioData.getData();



//What if we want Object as a value inside an Object:

// let bioData = {
//     myName: {
//         firstName : 'Akshat',
//         lastName : 'Daruka'
//     },
//     myAge : 20,
//     getData(){   // we don't have to write 'function' after ES6 
//         console.log(`My name is ${bioData.myName.firstName} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName);
// bioData.getData();



//What is 'this' Object :

// The definition of this object is that it contain the current context.

// The this object can have different values depending on where it is placed.

// Example1:
// console.log(this);
// it refferes to the current context and that is window global object.

// Example2:
// function myName(){
//     console.log(this);
// }
// myName();
//this will also give Windows global object as an output

// Example3:
// var myName = 'Akshat Daruka';
// function myNames(){
//     console.log(this.myName);
// }
// myNames();

// Example4:
// const obj = {
//     myAge : 20,
//     myName : 'Akshat',
//     myDetail (){
//         console.log(this);
//     }
// }
// obj.myDetail();
// now the object 'obj' will be represented by 'this'.



//Note:
// This Object will not work with arrow function

// const obj = {
//     myAge : 20,
//     myName : 'Akshat',
//     myDetail : () =>{
//         console.log(this);
//     }
// }
// obj.myDetail();
// here, 'this' will represent window global object, not 'obj'.


// Question:
// let bioData = {
//     myName: {
//         firstName : 'Akshat',
//         lastName : 'Daruka'
//     },
//     myAge : 20,
//     getData(){   // we don't have to write 'function' after ES6 
//         console.log(`My name is ${this.myName.firstName} and my age is ${this.myAge}`);
//     }
// }
// bioData.getData();