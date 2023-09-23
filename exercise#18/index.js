"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// Step 1: Store the locations in a array. Make sure the array is not in alphabetical order.
let locations = ["Turkey", "Austrailia", "Italy", "London", "Tomorrow Land"];
// Step 2: Print your array in its original order.
console.log("Original Order:");
console.log(locations);
// Step 3: Print your array in alphabetical order without modifying the actual list.
console.log("Alphabatical Order:");
console.log([...locations].sort());
// Step 4:  Show that your array is still in its original order by printing it.
console.log("Still in original order:");
console.log(locations);
// Step 5: Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:");
console.log([...locations].sort().reverse());
// Step 6: Show that your array is still in its original order by printing it again.
console.log("Still in original order:");
console.log(locations);
// Step 7: Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse Original Order:");
console.log([...locations].reverse());
// Step 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to Original - Reverse again:");
locations.reverse();
console.log(locations);
// Step 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sort in Alphabetical Order:");
console.log([...locations].sort());
// Step 10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Sort and Reverse:");
console.log([...locations].sort().reverse());
