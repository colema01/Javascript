
/* IF/ELSE IF */

// Declare and initialize a new variable to hold the current date

const date = new Date();

// Declare another variable to hold the day of the week

// Assign the value of the variable declared in Step 2 to the day of the week 

const weekday = date.getDay();

// Declare a variable to hold a message that will be displayed

message;

// Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

if(date > 0) {
    var message = "Hang in there!";
} else{
    var message = "Woohoo! It is the weekend!";
}

// Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
// Declare a new variable to hold another message

message2;

// Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared above

switch (weekday){
    case 0:
        message2 = "Sunday";
    break;

    case 1:
        message2 = "Monday";
    break;

    case 2:
        message2 = "Tuesday";
    break;

    case 3:
        message2 = "Wednesday";
    break;

    case 4:
        message2 = "Thursday";
    break;

    case 5:
        message2 = "Friday";
    break;

    case 6:
        message2 = "Saturday";
}

/* OUTPUT */

// Assign the value of the first message variable to the HTML element with an ID of message1

document.getElementById("message1").innerHTML = message

// Assign the value of the second message variable to the HTML element with an ID of message2

document.getElementById("message2").innerHTML = message2;
/* FETCH */
// Declare a global empty array variable to store a list of temples

let templeList = [];

// - Creates an HTML <article> element

articleElement = document.createElement("article");

articleElement.setAttribute('id', 'articleId');

// Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:


// - Creates an HTML <h3> element and add the temple's templeName property to it

// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children

function output(templeLists) {
    let temple = '';
    let temples = templeLists;
    for (let i = 0; i < temples.length; ++i) {
    temple += '<article>';
    temple += '<h3>' + temples[i].templeName + '</h3> ';
    temple += '<h4>' + temples[i].location + '</h4>';
    temple += '<h4>' + temples[i].dedicated + '</h4>';
    temple += '<img src='+'"'+temples[i].imageUrl+'"' + 'alt='+'"'+temples[i].templeName+'"' + '/>';
    temple += '</article>';
    }
    document.getElementById('temples').innerHTML = temple;
    return temple;
}
    // document.getElementById('sortBy').value = output(templeList);
    document.querySelector("#temples").append(articleElement);


//  Create another function called getTemples. Make it an async function.

async function getTemples() {
    let templesD = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
    templeList = await templesD.json();
    output(templeList);
    
    
}

getTemples();


// In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

//  Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

function reset(){
    document.getElementById('temples').innerHTML = "";
}

// Declare a function named sortBy that does the following:

// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples




function sortBy() {
    reset();
    let option = document.getElementById('sortBy').value;

    if(option == "templeNameAscending"){
        templeList.reverse();
        output(templeList);
    } else {
        templeList.reverse();
        output(templeList);
    }
}

// Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById('sortBy').addEventListener('change', sortBy);
/* STRETCH */
// This will require changes to both the HTML and the JavaScript files
