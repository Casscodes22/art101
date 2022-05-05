/*
* Author: Cassidy Crawford
* Created: May 4th
* License: Public Domain
*/

//find the element
var head1El = document.getElementById("output");

// create a new button element
var new1El = document.createElement("button");

// append the feature
head1El.appendChild(new1El);

// make the button say somthing
new1El.innerHTML = ("CLICK THIS DUDE");

// style the button
new1El.style.backgroundColor = "yellow";
new1El.style.color = "black";

//find the second element
var headEl = document.getElementById("output2");

//create a new element
var newEl = document.createElement("button");

//create button
headEl.appendChild(newEl);

// make the new button say somthing
newEl.innerHTML = ("NO! click me dude");

//style the new button
newEl.style.backgroundColor = "blue";
newEl.style.color = "white";
