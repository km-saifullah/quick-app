// server.js data
const serverCode = `import app from "./app.js"
const connectDb from "./db/connectDb.js"
import { serverPort } from './config/index.js'

// connect database
connectDb()

app.listen(serverPort, () => console.log("Server is running"))`;

// app.js data
const appCode = `import express from "express"

const app = express();

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export default app`;

// config data
const configCode = `import { configDotenv } from "dotenv"

configDotenv()

const serverPort = process.env.PORT || 8000
const dbUrl = process.env.DATABASE_URL

export { serverPort, dbUrl }`;

// connectDB data
const dbConnectionCode = `import mongoose from "mongoose"
import { dbUrl } from './../config/index'

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl)
    console.log("Database Connected")
  } catch (error) {
    console.log(error.message)
  }
}
export default connectDb`;

// prettierrc data
const prettierCode = `{
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true
}`;

// prettierignore data
const prettyIgnoreCode = `/.vscode
/node modules
•/dist
*.env
.env
.env.*`;

// gitignore data
const gitIgnoreCode = `# Logs
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
.pnp.*`;

export {
  serverCode,
  appCode,
  configCode,
  dbConnectionCode,
  prettierCode,
  prettyIgnoreCode,
  gitIgnoreCode,
};
