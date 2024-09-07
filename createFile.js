import fs from "fs";

const createFile = (fileName, data) => {
  return fs.writeFileSync(fileName, data);
};

export default createFile;
