/* Lesson 4 */

/* DATA */

// Declare a new variable to hold information about yourself

let info = {};

// Inside of the object, add a property named name with a value of your name as a string
info['name'] =  "Mitch Coleman";

info.photo = "images/photo.JPEG";

info.favoriteFoods = ["Pizza", " Burgers"," Fries"];

info.hobbies = ["Baseball"," Video Games"," Guns"]

info.placesLived = [];

// info.placesLived[0] = {"place":"Ohio", "length":"18 years"}
// info.placesLived[1] = {"place":"Jamaica", "length":"1 year"}
// info.placesLived[2] = {"place":"Utah", "length":"1 years"}
// info.placesLived[3] = {"place":"Idaho", "length":"1 year"}
info.placesLived = ["   Ohio", " Jamaica", " Utah", " Idaho"]

info.year = ["18 years", " 1 year"," 1 year", " 2 years "]


/* OUTPUT */

document.getElementById('name').innerHTML = info['name']

// Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

document.getElementById('photo').src = info.photo

// Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

document.getElementById('photo').alt = info['name']

// create an HTML <li> element and place its value in the <li> element

const ul = document.getElementById("favorite-foods");
const li = document.createElement("li");
li.appendChild(document.createTextNode(info.favoriteFoods));
ul.appendChild(li);
// Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// document.getElementById('favorite-foods').appendChild(food)

const ul2 = document.getElementById("hobbies");
const li2 = document.createElement("li2");
li2.appendChild(document.createTextNode(info.hobbies));
ul2.appendChild(li2);


// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

var d1 = document.getElementById("places-lived");
var dt = document.createElement("dt");
dt.appendChild(document.createTextNode(info.placesLived));
d1.appendChild(dt);

var d1 = document.getElementById("places-lived");
var dd = document.createElement("dd");
dd.appendChild(document.createTextNode(info.year));
d1.appendChild(dd);
