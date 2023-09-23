// Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the]+ Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.

const magicians = ["Harry Houdini", "David Copperfield", "David Blaine" , "Criss Angel", 
"Teller", "Derren Brown", "Ricky Jay"];

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}


function make_great(magicians: string[]): string[] {
    const Greatmagicians: string[] = magicians.map(magicians => `The great  ${magicians}`);
    return Greatmagicians;
}

const greatMagicianNames: string[] = make_great(magicians);
show_magicians(greatMagicianNames);





