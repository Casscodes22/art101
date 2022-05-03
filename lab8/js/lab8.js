/*
* Author: Cassidy Crawford
* Created: April 29th
* License: Public Domain
*/

function addTwo(x){
  return (x + 2);
}

// test function
console.log(addTwo(5));

console.log(addTwo(20));

aNumberArray = [22, 45, 99]
console.log("My Array", aNumberArray);

var result = aNumberArray.map(addTwo);
// should return with two added to each number in the array
console.log("add two to every number in aNumberArray", result)

var result = aNumberArray.map(function(x){
    return x * 10;
})
//should return the array mutiplied by ten [220, 450, 990]
console.log("mutiple each number in aNumberArray by ten", result)
