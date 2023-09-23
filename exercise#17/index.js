"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Step 1: Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
let guestList = [
    "Zainub Karim",
    "Ayesha Karim",
    "Saad Waseen",
    "Shoaib Karim",
    "Amman Messay",
    "Fatima Nadeem",
    "Najma Karim",
];
console.log("I can invite only two persons at dinner.");
// Step 2: Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`I am sorry ${removeGuest}, I can't invite you to the dinner.`);
}
;
// Step 3: Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let guest of guestList) {
    console.log(`Hello ${guest}, you are still invited to the dinner.`);
}
;
// Step 4: Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestList.pop();
guestList.pop();
console.log(guestList);
