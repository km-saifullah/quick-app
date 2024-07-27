const fs = require("fs");

const createDirectory = (filePath) => {
  return fs.mkdirSync(filePath, { recursive: false });
};

module.exports = createDirectory;
