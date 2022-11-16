const {readFileSync, promises: fsPromises} = require('fs');
const file = "./allAboutJavaScript.txt"

// ✅ read file SYNCHRONOUSLY
const syncReadFile = (filename) => {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  console.log(arr)

  return arr;
}

syncReadFile(file);