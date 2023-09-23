"use strict";
// Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the]+ Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
const magicians = ["Harry Houdini", "David Copperfield", "David Blaine", "Criss Angel",
    "Teller", "Derren Brown", "Ricky Jay"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const Greatmagicians = magicians.map(magicians => `The great  ${magicians}`);
    return Greatmagicians;
}
const greatMagicianNames = make_great(magicians);
show_magicians(greatMagicianNames);
