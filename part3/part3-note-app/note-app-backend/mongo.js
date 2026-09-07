const mongoose = require('mongoose');

// 1. Check if the user passed a password in the terminal command
if (process.argv.length < 3) {
    console.log('give password as argument');
    process.exit(1);
}

// 2. Read the password from the 3rd command-line argument (process.argv[2])

// node mongo myPassword123 [3]
const password = process.argv[2];

// 3. The MongoDB Connection String (Points to your Atlas cloud database)
const url = `mongodb+srv://fso-vinayak:${password}@notes-app.loz4osq.mongodb.net/notes-app?appName=notes-app`

mongoose.set('strictQuery', false);

// 4. Open the connection to the cloud database
console.log('Connecting to MongoDB Atlas...');
mongoose.connect(url);


// Define the Schema (The Blueprint of what a Note looks like)
const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
});

// 6. Create the Model (The Constructor that talks to the 'notes' collection)
const Note = mongoose.model('Note', noteSchema);




