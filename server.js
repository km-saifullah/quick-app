const createDirectory = require("./createDirectory");
const createFile = require("./createFile");
const {
  serverCode,
  appCode,
  configCode,
  dbConnectionCode,
  prettierCode,
  prettyIgnoreCode,
  gitIgnoreCode,
} = require("./filesData");

// create .env file
createFile(
  "./.env",
  `PORT=8000 
DATABASE_URL=your-mongodb-url`
);

// make directories
createDirectory("./src");
createDirectory("./src/controllers");
createDirectory("./src/models");
createDirectory("./src/db");
createDirectory("./src/routes");
createDirectory("./src/middlewares");
createDirectory("./src/config");
createDirectory("./src/utils");

// make files
createFile("./src/server.js", serverCode);
createFile("./src/app.js", appCode);
createFile("./src/config/index.js", configCode);
createFile("./src/db/connectDb.js", dbConnectionCode);
createFile("./.prettierrc", prettierCode);
createFile("./.prettierignore", prettyIgnoreCode);
createFile("./.gitignore", gitIgnoreCode);

console.log(`Great Job 👏 Start Writing Code in your new Express App
⚠️ Before Writing Code | you need to install packages below:
1. express
2. dotenv
3. mongoose
##### use the command below in the terminal in your project ####
npm install express mongoose dotenv`);
