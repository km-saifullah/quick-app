const fs = require("fs");

fs.writeFileSync(
  "./.env",
  `PORT=8000 
DATABASE_URL=your-mongodb-url`
);

fs.mkdirSync("./src", { recursive: false });
fs.mkdirSync("./src/controllers", { recursive: false });
fs.mkdirSync("./src/models", { recursive: false });
fs.mkdirSync("./src/db", { recursive: false });
fs.mkdirSync("./src/routes", { recursive: false });
fs.mkdirSync("./src/middlewares", { recursive: false });
fs.mkdirSync("./src/config", { recursive: false });
fs.mkdirSync("./src/utils", { recursive: false });

fs.writeFileSync(
  "./src/server.js",
  `const app = require("./app.js")
const connectDb = require("./db/connectDb")
const serverPort = require("./config/index")

// connect database
connectDb()

app.listen(serverPort, () => console.log("Server is running"))`
);

fs.writeFileSync(
  "./src/app.js",
  `const express = require("express")

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

module.exports = app`
);

fs.writeFileSync(
  "./src/config/index.js",
  `const { configDotenv } = require("dotenv")

configDotenv()

const serverPort = process.env.PORT
const dbUrl = process.env.DATABASE_URL

module.exports = { serverPort, dbUrl }`
);

fs.writeFileSync(
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

fs.writeFileSync(
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
fs.writeFileSync(
  "./.prettierignore",
  `/.vscode
/node modules
•/dist
*.env
.env
.env.*`
);
fs.writeFileSync(
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
⚠️ Before Writing Code: you need to install packages below:
1. express
2. dotenv
3. mongoose
##### use the command below in the terminal in your project ####
npm install express mongoose dotenv`);
