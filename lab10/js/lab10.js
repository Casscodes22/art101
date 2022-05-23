/*
*Author: Cassidy Crawford
*Created: 9 May 2022
*License: Public Domain
*/

var outputEl= document.getElementById("output");

var inputEl = document.getElementById("user-name");

var buttonEl = document.getElementById("the-button");

//sortUserName- a function that takes user input and
//sorts the letter of their name
function sortUserName(word) {
  //split string to array
  var nameArray = word.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//create event
buttonEl.addEventListener('click', function() {
  var userName = inputEl.value;
  var newName = sortUserName(userName);
  outputEl.innerHTML = "<p> Here is your new name!" + newName + "</p>";
});
