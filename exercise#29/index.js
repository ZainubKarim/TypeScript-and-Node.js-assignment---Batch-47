"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Array of fruits 
var favorite_fruits = ["oranges", "apples", "mangoes"];
// If statements
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("oranges")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("mangoes")) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}
;
