"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed. 
// Non-Empty 
const usernames = ['admin', 'Eric', 'James', 'Jane', 'James'];
function greetUsers(usernames) {
    if (usernames.length == 0) {
        console.log('We need to find some users');
        return;
    }
    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see the status report?');
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again. `);
        }
    }
}
;
console.log(`For non empty username: \n`);
greetUsers(usernames);
// Empty
const emptyUsername = [];
console.log(`For empty username: \n`);
greetUsers(emptyUsername);
