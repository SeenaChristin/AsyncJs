function step1() {
  let pr = new Promise((res, rej) => {
    const fs = require("fs");
    fs.readFile("./data/lipsum.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err + "Could not read file");
        rej();
      } else {
        res(data);
      }
    });
  });
  return pr;
}

module.exports = step1;
