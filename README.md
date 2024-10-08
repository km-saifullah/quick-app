# quick-app

Starter files and directories for an express application. Using this package you can create a new express app with all necessary files and directories.

[![JavaScript](https://img.shields.io/badge/JavaScript-323332?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat-square&logo=express)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-438937?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Mongoose](https://img.shields.io/badge/Mongoose-4DB33F?style=flat-square&logo=mongodb)](https://mongoosejs.com/)

## Installation & Usage

1.  Install the package in your project

    ```bash
    npm i quick-app
    ```

2.  Use this package in your project

    a. Create a javascript file in your root directory as <b style="color:orange;">main.js</b>
    b. Change in your package.json file

    ```javascript
    {
        "type": "module",
    }
    ```

    b. Now write the code below to <b style="color:orange;">main.js</b> file

    ```javascript
    import server from "quick-app";
    import fs from "fs";

    server();

    fs.unlinkSync("./main.js");
    ```

    c. Finally run the <b>main.js</b> file

    ```bash
    node main.js
    ```

Now you are ready to build your own express application according to your need.

Happy Coding...👍

## License

[MIT](https://github.com/expressjs/express/blob/HEAD/LICENSE)
