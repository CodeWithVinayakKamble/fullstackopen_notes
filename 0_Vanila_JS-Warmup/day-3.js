// 🧩 Puzzle 1: Destructuring, Renaming & Defaults

// Without running this in terminal, what will be logged to the console ?



const person = {
    name: 'Arto Hellas',
    number: '040-123456'
};

const { name: fullName, age = 30 } = person;
console.log(fullName, age, person.name);

// => 
// {Arto Hellas, 30, Arto Hellas }

// Puzzle 2: Method Chaining(.filter() + .map())
// Given this array of notes:


const notes = [
    { id: 1, content: 'HTML is easy', important: true },
    { id: 2, content: 'CSS is hard', important: false },
    { id: 3, content: 'JS is fun', important: true }
];

// Write a single 1 - line expression using method chaining (.filter() and.map()) that extracts only the text content of the important notes:

const filterTrue = notes.filter(note => note.important === true).map(note => note.content);
console.log(filterTrue);