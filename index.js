const {readFileSync, promises: fsPromises} = require('fs');
const file = "./allAboutJavaScript.txt"

var counts = {}


const asyncReadFile = async (filename) => {

    try {
      const contents = await fsPromises.readFile(filename, 'utf-8');
      const text = contents.split(/\W+/);
      const words = text.join("\n");
      const tokens = words.split(" ");
      console.log(tokens); 
      for (var i = 0; i < tokens.length; i++) {
        let word = tokens[i].toLowerCase();

        if(!/\d+/.test(word)) {
            if(counts[word] === undefined) {
                counts[word] = 1;
            } else {
                counts[word] = counts[word] + 1
            }
        }
      }
      return tokens;
    } catch (err) {
      console.log(err);
    }
  }
  
  asyncReadFile(file);