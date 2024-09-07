import fs from "fs";

const createDirectory = (filePath) => {
  return fs.mkdirSync(filePath, { recursive: false });
};

export default createDirectory;
