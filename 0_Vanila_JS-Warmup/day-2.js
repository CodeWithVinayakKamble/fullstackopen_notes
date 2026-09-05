// 🧩 Puzzle 1: Database Object Formatting
// MongoDB returns raw documents with _id and __v, like this:

const rawDocuments = [
    { _id: "64a1", name: "Arto", __v: 0 },
    { _id: "64a2", name: "Ada", __v: 0 }
];



// Write a clean 1 - line .map() expression that transforms rawDocuments into clean objects with id(instead of _id) and without __v: [{ id: "64a1", name: "Arto" }, { id: "64a2", name: "Ada" }]

const cleanDoc = rawDocuments.map(doc => ({
    id: doc._id,
    name: doc.name
}));

console.log(cleanDoc);


// 🧩 Puzzle 2: Asynchronous Execution Order
// In what exact order will the numbers be logged to the console ?


console.log('1');


setTimeout(() => {
    console.log('2');
}, 0);

Promise.resolve().then(() => {
    console.log('3');
});

console.log('4');

// => 1,4,3,2
// reason 1,4 no blocking code easyily can get passed by js event loop then its micro vs macro task, js first priority is micro then 3 then went macro 2