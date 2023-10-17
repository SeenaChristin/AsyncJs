const step1 = require("./step1.js");

async function step2() {
  const data = await step1();
  let upperCaseData = data.toUpperCase();
  const pr = new Promise((res, rej) => {
    const fs = require("fs");
    fs.writeFile("./data/uppercase.txt", upperCaseData, (err) => {
      if (err) {
        console.log("Error writing file", err);
        rej();
      } else {
        fs.writeFile("./data/filenames.txt", "uppercase.txt\n", (err) => {
          if (err) {
            console.log("Error writing file", err);
            rej();
          } else {
            res("uppercase.txt");
          }
        });
      }
    });
  });
  return pr;
}

module.exports = step2;
