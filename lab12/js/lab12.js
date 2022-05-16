/*
*Author: Cassidy Crawford
*Created: 16 May 2022
*License: Public Domain
*/

function sortingFlower(str) {
  length = str.length;
  mod = length % 4;
  if (mod == 0) {
    return "Rose"
}
else if (mod == 1) {
    return "Daisy"
}
else if (mod == 2) {
  return "Sunflower"
}
 else if (mod == 3) {
   return "Tulip"
 }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var flower = sortingFlower(name);
    newText = "<p> The sorting garden has sorted you as a " + flower + "</p";
    document.getElementById("output").innerHTML = newText;
})
