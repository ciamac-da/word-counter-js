const {promises: fsPromises} = require('fs');
const file = "./allAboutJavaScript.txt"
const counts = {};

const asyncReadFile = async (filename) => {

    try {
      const contents = await fsPromises.readFile(filename, 'utf-8');
      const text = contents.split(/\W+/);
      const words = text.join(" ");
      const tokens = words.split(" ");
      for (let i = 0; i < tokens.length; i++) {
        const tokenstLowerCase = tokens[i].toLowerCase();
        const onlyWords = tokenstLowerCase.replace(/[0-9]/g, '');
        if(isNaN(onlyWords)) {
            if(counts[onlyWords] === undefined) {
                counts[onlyWords] = 1;
            } else {
                counts[onlyWords] = counts[onlyWords] + 1
            }
        }
        console.log(counts);
      }

      return counts;

    } catch (err) {
      console.log(err);
    }
  }
  asyncReadFile(file);

  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }
