const step2 = require("./step2");

async function step3() {
  const fileName = await step2();
  const fs = require("fs");
  let result = "";
  let newFileNames = [];
  const pr = new Promise((res, rej) => {
    fs.readFile("./data/" + fileName, "utf8", (err, data) => {
      if (err) {
        console.log(err + "Could not read file");
        rej();
      } else {
        let lowerCase = data.toLowerCase();
        result = lowerCase.match(/[^\.!\?]+[\.!\?]+/g);
        result.map((sentence, index) => {
          fs.writeFile(
            "./data/" + index + ".txt",
            sentence.trimStart(),
            (err) => {
              if (err) {
                console.log("Error writing file", err);
              } else {
                fs.appendFile(
                  "./data/filenames.txt",
                  index + ".txt\n",
                  (err) => {
                    if (err) {
                      console.log("Error writing file", err);
                      rej();
                    } else {
                      newFileNames.push("./data/" + index + ".txt");
                      if (newFileNames.length == result.length) {
                        res(newFileNames);
                      }
                    }
                  }
                );
              }
            }
          );
        });
      }
    });
  });
  return pr;
}

module.exports = step3;
