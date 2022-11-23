// In JavaScript we have an Array class and arrays are the prototype of that class.
// Array can be heterogeneous-> array1 =["hi",2,undefined,null,true,23.4,"hello"];
// var musicBand = new Array; this is an optional line
// let musicBand = ["AC/DC","Nirvana","GunsnRoses","Queen","Eagles","Pink Floyd"];

//Traversal:
// console.log(musicBand[0]);//single element
// console.log(musicBand[musicBand.length -1]);//last element

//Navigate:
// for(let i=0;i<musicBand.length;i++)
// {
//     console.log(musicBand[i]);
// }

//After ES6 we have for..in and for..of loop too.

//for..in loop:
// for (let elements in musicBand){
//     console.log(elements);
// }
//for..in loop gives the index number of the array's elements.

//for..of loop:
// for(let elements of musicBand)
// {
//     console.log(elements);
// }
//for..of loop gives the elements of array.


// Array.prototype.forEach():
// Calls a function for each element in the array.

// musicBand.forEach(function(element,index,array){
//     console.log(element + " index: " + index + " array: " + array);
// });

//function(element,index,array) is a callback function.
//we can't use break or continue in forEach loop.
//for writing above by fat arrow function:

// musicBand.forEach((element,index,array)=>{
//      console.log(element + " index: " + index + " array: " + array)
//     });




//SEARCHING AND FILTER IN ARRAY:


//ARRAY.PROTOTYPE.INDEXOF():
// Returns least (first) index of the element passed and return -1 of element ot found.
// console.log(musicBand.indexOf('Nirvana',2));//will start forward searching from index 2.

//ARRAY.PROTOTYPE.LASTINDEXOF():
// Returns last index of the element (search backward).

//ARRAY.PROTOTYPE.INCLUDES():
//Return true if value present in array else false.
// console.log(musicBand.includes('Nirvana'));//true
// console.log(musicBand.includes('U2'));//false

//ARRAY.PROTOTYPE.FIND():
//arr.find(callback(element,index,array,this))
//return the element which passes the testing condition and return undefined if not found
//only return one element(first element that pass the condition)-->Disadvantage.

// const price =[200,300,350,400,450,500,600];

// const findElem = price.find((element)=>{
//     return element<400;
// });
// console.log(findElem);
// console.log(price.find((element)=> element<400));

//findIndex() is same as find() but it return the index number instead to the element.
//and also it returns -1 if the value is not found(find() returns undefined.)


//ARRAY.PROTOTYPE.FILTER():
// Returns a new array containing all the elements of the calling array for which the 
// provided filtering function return true.

// const price =[200,300,350,400,450,500,600];
// const newPri = price.filter((elem,index)=>{
//     return elem<400;
// });
// console.log(newPri);




//SORT AND COMPARE ARRAY:

//SORT METHOD:
// sort the elements of an array in place and returns the sorted array.
// default sort order is ascending, built upon converting the elements into
// string then comparing the sequence of UTF-16 unit values.
// So it will not work while sorting the numeric values 

// const months=['December','August','November','September','January'];
// console.log(months.sort());
// const numval = [1,251,4,32,1000];
// console.log(numval.sort());





//INSERT ADD DELETE REPLACE ELEMENTS IN ARRAY(CRUD):

// let musicBand = ["AC/DC","Nirvana","Queen","Eagles"];

// musicBand.push('Metallica','Aerosmith');
//push() adds elements to last of the array and returns the new length of the array.
// console.log(musicBand);

// musicBand.unshift('Pink Floyd','Guns n Roses');
//unshift() adds elements to starting of the array and returns the new length of the array.
// console.log(musicBand);

// musicBand.pop();
//pop() removes the last element of the array and returns that element.
//pop() change the length of the array.
// console.log(musicBand);

// musicBand.shift();
//shift() removes the first element of the array and returns that element.
//shift() change the length of the array.
// console.log(musicBand);



//ARRAY.PROTOTYPE.SPLICE():

// Adds and/or remove elements from an array.

// const months = ['Jan','march','April','June','July'];
// console.log(months);
//to add element at the end to the array:
// months.splice(months.length,0,'Dec');
//first parameter is the index we are staring from and since we are adding
//this element in last we need array.length().
//second parameter is the number of element we want to delete.
//third parameter is list of string.
// console.log(months);

// *Splice method returns the list of deleted elements.*
//In above case it will return empty array as we are not deleting anything.

//We can update elements using splice :
// const indexOfMonth = months.indexOf('march');
// if (indexOfMonth!=-1){
//     months.splice(indexOfMonth,1,'March');
//     console.log(months);
// }
// else{
//     console.log("no such data found");
// }

//Delete using splice 
// const indexToDelete = months.indexOf('June');
// if(indexToDelete!=-1){
//     const spliceReturns=months.splice(indexToDelete,1);//delete one element
//     //if we pass Infinity inplace of 1, it will delete all elements after indexToDelete
//     console.log(months);
//     console.log(spliceReturns);//splice will return list of deleted element
// }
// else{
//     console.log('no such data found');
// }





//MAP REDUCE AND FILTER METHODS:



//Array.prototype.map():
// let newArray = arr.map((element,index,array,this)=>{
//     returns element of newArray after executing something on arr 
//     output will be in true and false.
// });
//returns a new array containing the results of calling a function 
//on every element in this array.
//map() returns a new array and don't affect the original array.
// const array1=[1,4,9,16,25];
// let newArray = array1.map((element,index,array)=>{
//     return element>9
// });
// console.log(array1);
// console.log(newArray);


//Using chaining with map():
// let arr1=[2,4,5,6,8];
// //we have to multiply each element by 2 and return those greater than 10:
// let arr2= arr1.map((curElem)=> curElem*2).filter((curElem)=>curElem>10);
// console.log(arr1);
// console.log(arr2);



//REDUCE() METHOD:
//the reduce() method execute a reducer method(that we provide) on each element
//of the array, resulting in the single output value.

// the reducer function takes 4 arguments:
// 1. Accumulator
// 2. Current Value
// 3. Current Index
// 4. Source Array 

// let arr = [5,9,13];
// //Find sum using reduce:

// let sum = arr.reduce((accumulator,curElem,index,arr)=>{
//     return accumulator += curElem;
// },7);//Here 7 is the initial value of the accumulator:output=7+5+9+13.
// console.log(sum);



//How to flatten an array, i.e., convert a 3d or 2d array into 1d array.

// const arr =[
//     ['Zone1','Zone2'],
//     ['Zone3','Zone4'],
//     ['Zone5','Zone6'],
//     ['Zone7','Zone8']
// ];

// let flatArr = arr.reduce((accum,currVal)=>{
//             return accum.concat(currVal);
// });
// console.log(flatArr);