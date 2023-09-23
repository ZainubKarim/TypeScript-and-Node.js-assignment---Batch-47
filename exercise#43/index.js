"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const magicians = ["Harry Houdini", "David Copperfield", "David Blaine", "Criss Angel",
    "Teller", "Derren Brown", "Ricky Jay"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magicians => `The great ${magicians}`);
    return greatMagicians;
}
const greatMagicianNames = make_great(magicians);
// Unchanged/Original Magicians: 
console.log("\nOriginal Magicians");
show_magicians(magicians);
// Changed/Great Magicians: 
console.log("\nGreat Magicians");
show_magicians(greatMagicianNames);
