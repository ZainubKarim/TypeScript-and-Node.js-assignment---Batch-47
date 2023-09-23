"use strict";
/* They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items. */
const Car = {
    name: "Honda City",
    price: 20000000,
    description: "Honda City is fastest car in Lahore.",
};
let Car1 = [];
Car1.push(Car);
Car1.push({ name: "Honda Civic", price: 10000000, description: "Honda Civic is fastest car in Lahore." });
console.log(Car1);
let Car2 = [];
Car2.push(Car);
Car2.push({ name: "Corola", price: 40000000, description: "Corola is fastest car in Lahore." });
console.log(Car2);
function displayCar(car) {
    car.forEach(car => {
        console.log(car.name);
        console.log(car.price);
        console.log(car.description);
    });
}
displayCar(Car1);
displayCar(Car2);
