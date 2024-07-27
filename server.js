const createDirectory = require("./createDirectory");
const createFile = require("./createFile");

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
createFile(
  "./src/server.js",
  `const app = require("./app.js")
const connectDb = require("./db/connectDb")
const serverPort = require("./config/index")

// connect database
connectDb()

app.listen(serverPort, () => console.log("Server is running"))`
);

createFile(
  "./src/app.js",
  `const express = require("express")

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

module.exports = app`
);

createFile(
  "./src/config/index.js",
  `const { configDotenv } = require("dotenv")

configDotenv()

const serverPort = process.env.PORT
const dbUrl = process.env.DATABASE_URL

module.exports = { serverPort, dbUrl }`
);

createFile(
  "./src/db/connectDb.js",
  `const mongoose = require("mongoose")
const dbUrl = require("./../config/index")

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl)
    console.log("Database Connected")
  } catch (error) {
    console.log(error.message)
  }
}
module.exports = connectDb`
);

createFile(
  "./.prettierrc",
  `{
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true
}`
);

createFile(
  "./.prettierignore",
  `/.vscode
/node modules
•/dist
*.env
.env
.env.*`
);

createFile(
  "./.gitignore",
  `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# vuepress v2.x temp and cache directory
.temp
.cache

# Serverless directories
.serverless/

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*`
);

console.log(`Great Job 👏 Start Writing Code in your new Express App
⚠️ Before Writing Code | you need to install packages below:
1. express
2. dotenv
3. mongoose
##### use the command below in the terminal in your project ####
npm install express mongoose dotenv`);
