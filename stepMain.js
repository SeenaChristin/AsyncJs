const step4 = require("./step4");

async function main() {
  const flag = await step4();
  console.log(flag);
  const fs = require("fs");
  fs.readFile("./data/filenames.txt", "utf-8", (err, data) => {
    if (err) {
    } else {
      const allNames = data.split(/\r?\n/);
      allNames.map((name) => {
        if (name != "") {
          fs.unlink("./data/" + name, (err) => {
            if (err) {
              console.log("could not delete");
            } else {
              console.log("Deleted file " + name);
            }
          });
        }
      });
    }
  });
}

main();
