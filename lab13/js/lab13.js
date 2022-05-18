/*
*Author: Cassidy Crawford
*Created: 18 May 2022
*License: Public Domain
*/

function fizzFactorial () {
  //Loop through numbers 1 to 200
  for (i=1; i<= 200; i ++)
  //If the number is a multiple of 3, 5 or 7, it should combine Fizz, Buzz, and Boom
     if ((i % 3 == 0) && (i % 5 == 0) && (i % 7 == 0)) {
      $("#output").append("<p>" + "FizzBuzzBoom" + "</p>");
    }
  //If the number is a multiple of 3, print "Fizz!"
    else if (i % 3 == 0) {
      $("#output").append("<p>" + "Fizz" + "</p>");
    }
  //If the number is a multiple of 5, print "Buzz!"
    else if (i % 5 == 0) {
      $("#output").append("<p>" + "Buzz" + "</p>");
    }
  //If the number is a multiple of 7, print "Boom!"
    else if (i % 7 == 0) {
      $("#output").append("<p>" + "Boom" + "</p>");
     }
     else {
      $("#output").append("<p>" + i + "</p>");
    }
  }

myButton = document.getElementById("button");

myButton.addEventListener("click", function(){
  fizzFactorial()
});
