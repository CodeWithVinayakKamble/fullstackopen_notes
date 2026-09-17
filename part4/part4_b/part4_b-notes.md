# Testing the backend

* Got one golden rule while doing coding warm-up 

    - **An async function runs 100% SYNCHRONOUSLY until it hits the first** **_`await keyword`_**.

---

1. Why Integration Testing?

    - Until now, whenever you wrote a new backend route or feature, how did you test it?

        * You started the server with `npm run dev`.

        * You opened the `browser` or clicked send in `Postman` / `VS Code REST client`.

        * You manually checked MongoDB Atlas to see if the document was inserted.

    ---

    * `In production engineering, manual testing is too slow and dangerous`. If you change one line in your authentication middleware, you might accidentally break 10 different routes without realizing it.

        * We need Automated Integration Tests that:

            * Start the Express app in memory.

            * Send real HTTP requests (GET /api/blogs, POST /api/blogs).

            * Assert that status codes, headers, and JSON responses match our specifications.

            * Run in 2 seconds every time we push code.
    
    ---

    * We need Automated Integration Tests that:

        * Start the Express app in memory.

        * Send real HTTP requests (GET /api/blogs, POST /api/blogs).

        * Assert that status codes, headers, and JSON responses match our specifications.

        * Run in 2 seconds every time we push code.

---

## Process to init Automated Integration (Unit tetsing)

* _Step 1_: **Isolating the Test Database (NODE_ENV)**

    ```md
    * **development**: when we run the app locally with npm run dev / nodemon.
    * **production**: when deployed live on the internet (e.g., Render).
    * **test**: when we run automated test suites (npm test)
    ```
    ---

    * Why do we care?
        - In test mode, we want our application to connect to a separate test database **(TEST_MONGODB_URI)** so our tests never accidentally erase or mess up our development or production data.

    ---

    * The Problem with Windows vs Linux/Mac (cross-env):

        - To tell Node which mode it is in, we set an environment variable named NODE_ENV.

            * On Linux/Mac: NODE_ENV=test node --test works.

            * On Windows PowerShell: NODE_ENV=test fails with an error (The term 'NODE_ENV' is not recognized)
    
    ---

    * solution (cross-env)

        1. install `cross-env` lib and --save-dev dev-dependency
        ---
        2. configure **scripts** in _package.json_
        ```json
        "scripts": {
        "start": "cross-env NODE_ENV=production node index.js",
        "dev": "cross-env NODE_ENV=development node --watch --inspect index.js",
        "test": "cross-env NODE_ENV=test node --test"
        }
        ```
        ---
        3. in .env define TEST_MONGODB_URI right below OG: MONGODB_URI
        ```
        MONGODB_URI=mongodb+srv://fso-vinayak:<passkey>url/notes-app?appName=notes-app

        <!-- Add testword before your app names before ? thats it -->
        TEST_MONGODB_URI=mongodb+srv://fso-vinayak:<passkey>url/testnotes-app?appName=notes-app

        PORT=3003
        ```
        ---
        4. In utils/config.js, update how MONGODB_URI is exported:

            * If process.env.NODE_ENV === 'test', use process.env.TEST_MONGODB_URI
            * Otherwise, use process.env.MONGODB_URI




    

    