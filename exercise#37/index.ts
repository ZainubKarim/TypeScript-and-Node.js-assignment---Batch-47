// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "Large" , message: string = "I love TypeScript."): void {
console.log(`Size: ${size}, Message: ${message}`);
}

make_shirt();

// Default msg for medium
make_shirt("Medium");

// Default msg for small
make_shirt("Small", "Hello World!");


