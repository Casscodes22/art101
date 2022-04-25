/*
 * Author: Cassidy Crawford
 *created: 25 April
 *License; Public Domain
 */

//Define Variables
myTransport= ["walk", "car", "bus",];


myMainRide = {
  make: "Subaru",
  model: "Forester",
  color: "Silver",
  year: 2015,
  age: function() {
      return 2022 - age;
  }
}

// output
document.writeln("Kinds of Transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride; <pre>",
    JSON.strngfy(myMainRide, null, '\t'),"<pre");
