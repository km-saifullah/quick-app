import createDirectory from "./createDirectory.js";
import createFile from "./createFile.js";
import {
  serverCode,
  appCode,
  configCode,
  dbConnectionCode,
  prettierCode,
  prettyIgnoreCode,
  gitIgnoreCode,
} from "./filesData.js";

// create .env file
createFile("./.env", `DATABASE_URL=your-mongodb-url`);

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
##### install the packages below ####
npm install express mongoose dotenv`);
