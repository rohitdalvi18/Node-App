const fs = require("fs");

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const readFiles = async () => {
  try {
    const file1 = await readFile("./file1.txt");
    const file2 = await readFile("./file2.txt");
    console.log(file1, file2);
  } catch (err) {
    console.error(err);
  }
};

readFiles();