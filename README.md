# quick-app

Starter files and directories for an express application. Using this package you can create a new express app with all necessary files and directories.

## Installation & Usage

1.  Install the package in your project
    `npm i quick-app`

2.  Use this package in your project

    a. Create a javascript file in your root directory as main.js

    b. Now write the code below to main.js file

    ```javascript
    const server = require("quick-app");
    const fs = require("fs");

    fs.unlinkSync("./main.js");
    ```

    c. Finally run the main.js file `node main.js`

Now you are ready to build your own express application according to your needs.

Happy Coding...👍

## License

[MIT](https://github.com/expressjs/express/blob/HEAD/LICENSE)
