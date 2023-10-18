const step3 = require("./step3");

async function step4() {
  const newFileNames = await step3();
  const fs = require("fs");
  let toSortArr = [];
  const pr = new Promise((res, rej) => {
    newFileNames.map((name, index) => {
      fs.readFile(name, "utf-8", (err, data) => {
        if (err) {
          console.log("could not read file " + name);
        } else {
          toSortArr.push(data);
          if (index == newFileNames.length - 1) {
            toSortArr.sort();
            fs.writeFile(
              "./data/sorted.txt",
              JSON.stringify(toSortArr),
              "utf-8",
              (err) => {
                if (err) {
                  console.log("Error writing file", err);
                } else {
                  fs.appendFile(
                    "./data/filenames.txt",
                    "sorted.txt\n",
                    (err) => {
                      if (err) {
                        console.log("Error writing file", err);
                        rej();
                      } else {
                        res(toSortArr);
                      }
                    }
                  );
                }
              }
            );
          } else {
          }
        }
      });
    });
  });
  return pr;
}

module.exports = step4;
