//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

//Function to create an object
function createObject(name: string, age: number, gender: string) {return{
    name,
    age,
    gender};
}

//Function to create an array
const person = [
    createObject("John", 30, "Male"),
    createObject("Mary", 25, "Female"),
    createObject("Peter", 20, "Male"),
    createObject("Jane", 35, "Female"),
    createObject("Josh", 20, "Male")
];

//Access an invalid index
const invalidIndex = 10; //There are only 5 elements in array, so this will cause an error
console.log(`person at index ${invalidIndex}:`, person [invalidIndex]);

// Print Invalid Index Error
person.forEach((person) => { 
    console.log(`Name: ${person.name}, Age: ${person.age}, Gender: ${person.gender}`);
});

export{};
