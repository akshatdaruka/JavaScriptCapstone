// Java Script date objects represents a single moment in time in a platform
// independent format. Date objects contains a number that represents 
// milliseconds since 1st January 1970 UTC. 

// There are 4 ways to create new date objects:
// 1. new Date();
// 2. new Date(year, month, day, hour, minutes, seconds, milliseconds);
// Date() takes maximum 7 arguments.
// 3. new Date(milliseconds);
// we cannot avoid month section.
// 4. new Date(date string);



// new Date():
// date objects are created with the new date constructor.

// let currDate = new Date();
// console.log(currDate);
// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// //Date.now():
// Returns the numeric value corresponding to the current time- the
// number of milliseconds elapsed since 1st January,1970 00:00:00 UTC. 
// console.log(Date.now());



// new Date(year, month, day, hour, minutes, seconds, milliseconds);
// The order is specefic: The arguments passed should follow the above order.
// JavaScript counts month from 0 to 11 (January-0 and December-11).

// let d = new Date(2021,0,1,13,21,36,0);
// console.log(d.toLocaleString());
// console.log(d.toString());



// new Date(date string):
// creates a new date object from a date string.
// var d = new Date("January 1, 2021 12:45:34");
// console.log(d.toLocaleString());



// new Date(milliseconds):
// var d = new Date(87634526);
// console.log(d.toLocaleString());



//Dates Methods:

// const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());


// How to set the individual dates:
// const curDate = new Date();
// console.log(curDate.setFullYear(2022));
// // setFullYear() can optionally set month and day
// console.log(curDate.setFullYear(2022,10,5));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());



//TIMES METHOD:

// const curTime = new Date();
// console.log(curTime.getTime());
// // getTime() method returns no of milliseconds since 1st Jan 1970.
// console.log(curTime.getHours());//returns number between (0-23).
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());



// let curTime = new Date();
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));


// console.log(new Date().toLocaleTimeString());//only time
// console.log(new Date().toLocaleDateString());//only date