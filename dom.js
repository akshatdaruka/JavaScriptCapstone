// Functions alert/confirm/prompt are also part of BOM:
// they are directly not related to the document,
// but represents pure browser methods of communicating withe the users.

// alert(location.href); //shows current url.
// if(confirm("Want to visit Youtube")){
//     location.href="https://www.youtube.com";//directs user to youtube.com
// }


//Navigate through the DOM:

// document.documentElement:
     //returns the element that is the root element of the document

// document.head
// document.body

// document.childNodes  (includes tabs, enters and whitespaces)
//       list of direct children only

// document.children  (without text nodes, only regular elements)

// document.childNodes.length 

// document.hasChildNodes()
// shows wether a element has child node or not


// let child1 = document.querySelector('.className');
// //we can directly access class by this and also make changes to them
// child1.style.color = 'yellow';


// document.head.parentNode

// document.body.previousElementSibling
// document.body.nextElementSibling





//HOW TO SEARCH THE ELEMENTS AND THE REFERENCE 

//we can do it directly:
// document.getElementById('heading').innerHTML="inner Html of heading id is changed";

// //we can do above by reference also:
// const headingChange = document.getElementById('heading');
// headingChange.innerHTML = "inner Html of heading id is changed by using reference";


//to get elements by class name :
// document.getElementsByClassName('class');

//to get elements by tag name:
// document.getElementsByTagName('p');

//to get elements by name:
// document.getElementsByName('gender');



// QUERY SELECTORS:

// document.querySelector('#heading').innerHTML='changing with query selector';
// we used # for id and . for class 
// querySelector will return the first match of the given value 

// document.querySelectorAll('.para');
// will give all elements with class name para

