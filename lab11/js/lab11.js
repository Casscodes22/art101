/*
*Author: Cassidy Crawford
*Created: 11 May 2022
*License: Public Domain
*/

//create button for challenges section
$("#challenges").append("<button id='button1'>press me</button>");

//create button for problems section
$("#problems").append("<button id='button2'>press me too</button>");

//creat button for results section
$("#results").append("<button id='button3'>dont forget about me!</button>");

// Click Event for button 1
$("#button1").click(function(){
//toggle new back ground color 
  $("#challenges").toggleClass("special")
});

//Click evernt for button 2
$("#button2").click(function(){
//Toggle new background color
  $("#problems").toggleClass("special")
});

// Click event for button 3
$("#button3").click(function(){
// toggle new background color
  $("#results").toggleClass("special")
});
