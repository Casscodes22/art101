/*
*Author: Cassidy Crawford
*Created: 16 May 2022
*License: Public Domain
*/

flowerArray = [
  {
    title: "Rose",
    text: "A Rose symoblized beauty, strength and grit."
  },
  {
    title: "Daisy",
    text: "A Daisy signifies cheerfulnessn and are bright lights in nature. "
  },
  {
    title: "Sunflower",
    text: " A Sunflower represent good luck in many cultures, as well as evokes a sence of loyalty and trust from others "
  },
  {
    title: "Tulip",
    text: "Tulips are a symbols of undying love and eternal connection. This spiit is strong and intense, who fights for the ones they love"
  }
]

// Return Rose, Daisy, Sunflower, and Tulip
// depending on length mod 4
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
    newText = "<p> The secret garden has sorted you as a " + flower + "</p";
    document.getElementById("output").innerHTML = newText;
    var flowerArray = document.getElementById("flowerArray");
})
