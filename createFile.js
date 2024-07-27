const fs = require("fs");

const createFile = (fileName, data) => {
  return fs.writeFileSync(fileName, data);
};

module.exports = createFile;
