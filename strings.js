//STRINGS IN JAVA SCRIPT:

// Strings can be created as primitive, from string literals,
// or as objects using String() constructor.

// let x1 = 'Bob Dylan';
// let x2 = "Led Zepplin";
// // let x3 = new String("Brayn Adams");//we don't use this often

// console.log(x2.length);



//ESCAPE CHARACTER:

// /(Backslash) escape character turns special character into string character.
// let x = "Hotel Carlifonia by \"The Eagles\" is a great song.";
// console.log(x);

//find string inside a string.
// console.log(x.indexOf('great',3));//will search from index 3
//returns -1 if data not found .

//string.prototype.lastIndexOf- Backward Search.

//Searching for string in a string.
//search() method is same as indexOf but we can't pass 2nd argument, i.e.,
//search from in search().




//Extracting String Parts:

//slice() method: extract a part from the string and return the extracted part
//in a new string. slice(start,end)--> end is exclusive and start is inclusive.

// let str1 = "Apple, Banana, Orange";
// console.log(str1.slice(0,5));
// console.log(str1.slice(6,-2));
//will start from index 6 and go to the last but exclude last 2 index.

//substring() is similar to slice(), difference is that it don't take negative 
//parameter. substring(7,-x), x can be any positive number, this means o to 7.


//substr() is similar to slice(), difference is that the second argument 
//specifies the length of the extracted part.
// let res1 = str1.substr(-4);//will fetch 4 character from the last.
// let res2 = str1.substr(5,-2);//will not give any output.
// let res3 = str1.substr(2,5);//will fetch 5 characters from index 2.





//REPLACING STRING CONTENT

//.replace(searchFor,replaceWith);
//this returns a new string and don't affect the original one.
//by default replaces the first match.
// let str1 = "Apple, Banana, Orange";
// let str2= str1.replace("Banana","Kiwi");
// console.log(str2);
// console.log(str1);





//EXTRACTING STRING CHARACTERS:

// let str1='Bohemian Rhapsody';
// console.log(str1.charAt(2));//gives character at index 2

// console.log(str1.charCodeAt(2));//returns the UTF-16 Code of charcter at index 2


//Property Access:
//ECMA SCript 5 allows propert access by using []:
// let str1='Bohemian Rhapsody';
// console.log(str1[4]);//Gives character at index 4(behaves like array);





//Other Useful Methods:

// let str1 = "sTairWay tO HeaVen";
// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());

// let st1 = 'Bohemian';
// let st2 = 'Rhapsody';
// console.log(st1.concat(st2));
// console.log(st1.concat(" ",st2));


//String.trim():
//it removes the whitespace from both side of the string.
// let st1 = "   Comfortably   Numb    ";
// console.log(st1);
// console.log(st1.trim());



//Converting a String to an Array:
//We will use split() method for this:

let a = 'a,|b, c, d,|e';
console.log(a.split(',')); //split on commas
console.log(a.split(' ')); //split on space
console.log(a.split('|')); //split on |