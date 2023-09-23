"use strict";
/* Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
Modify your program to print a statement about each animal, such as A dog would make a great pet.
Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet! */
const animals = ['Sheep', 'Goat', 'Cow'];
console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}
console.log("\nStatements about each animal:");
for (const animal of animals) {
    if (animal === 'Sheep') {
        console.log(`A ${animal} would be great to have in farm.`);
    }
    else if (animal === 'Goat') {
        console.log(`A ${animal} would make a great pet.`);
    }
    else if (animal === 'Cow') {
        console.log(`A ${animal} gives us meat and milk.`);
    }
}
console.log("\nWhat these animals have in common:");
for (const animal of animals) {
    if (animal === 'Sheep' || animal === 'Goat' || animal === 'Cow') {
        console.log(`Any of these animals would be great to have in the farm!`);
    }
}
