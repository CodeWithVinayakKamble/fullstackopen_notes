const users = [
    { id: 1, name: 'Arto' },
    { id: 2, name: 'Ada' }
];
const found = users.find(u => u.id === 3)?.name || 'Guest User';

// ================================================================= //

const items = ['apple', 'banana', 'orange', 'mango'];

const newItem = [...items.slice(0, 2), 'grapes', ...items.slice(3)];

console.log(newItem);


// INFO

// .slice( start,end ) => is the process of cutting array take two args , first(must) second(optional) but it makes diffrence if we did not mention second or end param okay
