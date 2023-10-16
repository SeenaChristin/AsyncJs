const fs = require("fs");
const filePath1 = "./data/file1.json";
const filePath2 = "./data/file2.json";
const filePath3 = "./data/file3.json";
const filePaths = [filePath1, filePath2, filePath3];

function problem2() {
  function dataCreate() {
    return Promise.all(
      filePaths.map(
        (file) =>
          new Promise((res, rej) => {
            try {
              fs.writeFile(file, "", (err) => {
                if (err) throw err;
                console.log(`${file} was created`);
                res();
              });
              if (file === filePath3) {
                res();
                return;
              }
            } catch (err) {
              console.error(err);
              rej(err);
            }
          })
      )
    );
  }
  function dataDelete() {
    filePaths.map((file) => {
      fs.unlink(file, (err) => {
        if (err) {
          console.log("Error in deleting file" + file);
        } else {
          console.log(file + " is deleted");
        }
      });
    });
  }
  dataCreate().then(function () {
    dataDelete();
  });
}
module.exports = problem2;
