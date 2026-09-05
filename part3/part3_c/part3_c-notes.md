# Saving data to MongoDB

## Debugging Node applications

* Ways to Debug Node.js Apps:

    * console.log() (The #1 Tool used by 95% of Engineers):
    ```js
    console.log('Incoming Body:', request.body);
    console.log('Found Person:', person);
    ```

    * Chrome DevTools for Node **(node --inspect index.js)**:

        * You can run Node with --inspect and open chrome://inspect in your browser to debug Node backend code using Chrome's DevTools console!


* When bugs occur, the worst of all possible strategies is to continue writing code. It will guarantee that your code will soon have even more bugs, and debugging them will be even more difficult

---

## MongoDB

* The reason for using Mongo as the database is its lower complexity compared to a relational database.

* Document databases differ from relational databases in how they organize data as well as in the query languages they support. Document databases are usually categorized under the NoSQL umbrella term.

### Collection and Documents

* The Folder & File Analogy 🗂️

    * Think of MongoDB like a file cabinet on your computer:

        ```
        MongoDB Database (The Whole Cabinet)
        |
        └── Collection (A Folder)
                |
                └── Document (A Single JSON File inside the folder)
        ```
        
    1. What is a Document? (A Single Item)

        - A Document is just ONE individual record stored in JSON (BSON) format.

            ```json
            {
            "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
            "name": "Arto Hellas",
            "number": "040-123456"
            }
            ```

    2. What is a Collection? (The Group / Array)

        * A Collection is simply a group or list of documents (equivalent to an array of objects in JavaScript).

        * Example: 
        ```js
        const persons = [
            {name : "Arto Hellas",number : 040-123456},
            {name : "Arto Hellas",number : 040-123456},
            {name : "Arto Hellas",number : 040-123456},
            {name : "Arto Hellas",number : 040-123456}
        ]
        ```

        * The whole **array persons** is called the **Collection**.
        * **Each individual object **{ id: "1", ... } inside that array is **called a Document**.

---

## DB

* f9PqYcpbm3sXt5nv
* mongodb+srv://admin_phonebook_vinayak:f9PqYcpbm3sXt5nv@phonebook.ykp1rbp.mongodb.net/phonebook?appName=phonebook

* Create project 
* Create cluster in that project 
* Set data base user credentials by userName and password and main role Atlas admin / Read and write to any database
* set the IP Address to open for all by 0.0.0.0/0 from IP access list
* connection : connect > Drivers > set the pa