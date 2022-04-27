/*
 * Author: Cassidy Crawford
 *created: 27 April
 *License; Public Domain
 */

//sortUserName - a functions that user input and sorts the letters of their name

function sortUserName() {
  var userName = window.prompt("Welcome, please tell me your full name so I can call you by your name!");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//output
document.writeln("Great, I will now call you by your new name: ",
  sortUserName(),"</br>");
