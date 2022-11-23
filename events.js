// HTML Events are "things" that happen to HTML elements 
// When JavaScript is used in HTML pages, JavaScript can "react" on these events. 

// An HTML events can be something the browser does, or something an user does.

// Examples:
// 1. An HTML web page has finished loading.
// 2. An HTML input field was changed.
// 3. An HTML button was clicked. 
// Often when events happen, you may want to do something.


// JavaScript lets us execute codes when events are detected.

// HTML allow event handler attributes, with JavaScript codes,
// to be added to HTML elements.


// Ways of writing Events in JavaScript:

// 1. using inline events alert();
// 2. by calling a functions (most common)
// 3. by using inline events (HTML onclick="" properties and Element.onclick)
// 4. using event Listener (addEventListener and IE's attachEvent)




//Examples:

// 1.
// <a class = "para" onclick="alert('simple Inline Alert')">;
// **************************
// 2.
// <a class ="para" onclick="callingFunction()">;
// <script>
//     const callingFunction = () => {
//             alert("calling function")
//     }
// </script>
// **************************
// 3.
{/* <span class="button_text conatiner" id="thirdWay">
    Inline Event
</span>
<script>
    const thirdWayRef = document.getElementById('thirdWay');
    thirdWayRef.onclick = function() {
        alert('by using reference and inline events onclick')
    }
</script> */}
// **************************
// 4.
//  <a href="#" class="button_su_inner" id="fourthWay" >
//      <span>
//          Event Listener
//      </span>
//  </a>   
//  <script>
//      const fourthWayRef = document.getElementById('fourthWay');
//      fourthWayRef.addEventListener('click', () => {
//          alert('Using Event Listener for writing event');
//      })
//  </script>
// **************************

// We can call same events of different work for multiple times using event listener.





// What is Event Object :
// Event Object is the parent object of the event Object 
// for example: MouseEvent, focusEvent, keyboardEvent

// Example:
// To get all the information about the event, we can use Event Object. 
/*
<a href="#" class="button_su_inner" id="fourthWay" >
      <span>
          Event Listener
      </span>
  </a>   

  <script>
      const fourthWayRef = document.getElementById('fourthWay');

    const checkEvent = () => {
        alert('we are using event object');
        console.log(event);
        console.log(event.target);
        console.log(event.type);
    }

      fourthWayRef.addEventListener('click', checkEvent);
  </script>
*/


// MOUSE EVENTS:
// Events that occur when the mouse interacts with the HTML documents 
// belongs to MouseEvent Object.

// KEYBOARD EVENTS:
// Events that occur when user presses a key on the keyboard, belongs to 
// the KeyboardEvent Object.

// INPUT EVENTS:
// The onchange Events occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange events occurs when the 
// checked state has been changed.



//TIMING BASED EVENTS:
// setTimeout()
// setInterval()
// clearInterval()
// clearTimeout()

// The window Object allows execution of code at specified time intervals 
// These time intervals are called timing events 
// The 2 key methods to use with javascript are :

// setTimeout(function,millisecond)
// Executes a function, after waiting a specified number of milliseconds 

// setInterval(function,millisecond)
// Same as setTimeout() but repeats the execution of the function continuously 

