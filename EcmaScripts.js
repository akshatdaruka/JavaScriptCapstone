// Array Destructuring:

// const myBioData = ['Akshat','Daruka',20];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];
// console.log(myAge);

//Instead of writing above code we will use array destructuring:

// let [myFName,myLName,myAge] = myBioData;
// console.log(myAge);

//We can add more items as well:
// let [myFName,myLName,myAge,myDegree='BTech'] = myBioData;
// console.log(myAge);
// console.log(myDegree);


// Object Destructuring:

// let myBioData = {
//     myFName : 'Akshat',
//     myLName : 'Daruka',
//     myAge : 20
// }

// let {myFName,myLName,myAge,myDegree='BTech'} = myBioData;
// console.log(myLName);
// console.log(myDegree);




//OBJECT PROPERTIES:

// We acn now use dynamic properties:

let myName = 'Akshat';
let myBioData={
    [myName] : "is my name ",
    26 : "is my age"
}
console.log(myBioData);