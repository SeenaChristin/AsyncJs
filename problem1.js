const fs = require("fs");
const filePath1 = "./data/file1.json";
const filePath2 = "./data/file2.json";
const filePath3 = "./data/file3.json";

function problem1() {
  function createJsonFiles(filePath1, filePath2, filePath3) {
    fs.writeFile(filePath1, "", (err) => {
      if (err) {
        console.log("error in writing file");
      } else {
        console.log("File1 wrote succssfully");
      }
    });
    fs.writeFile(filePath2, "", (err) => {
      if (err) {
        console.log("error in writing file");
      } else {
        console.log("File2 wrote succssfully");
      }
    });
    fs.writeFile(filePath3, "", (err) => {
      if (err) {
        console.log("error in writing file");
      } else {
        console.log("File3 wrote succssfully");
      }
    });
  }

  function deleteAllFiles() {
    fs.unlink(filePath1, (err) => {
      if (err) {
        console.log("Could not delete File1");
      } else {
        console.log("File1 deleted successfully");
        fs.unlink(filePath2, () => {
          if (err) {
            console.log("Could not delete File2");
          } else {
            console.log("File2 deleted successfully");
            fs.unlink(filePath3, () => {
              if (err) {
                console.log("Could not delete File3");
              } else {
                console.log("File3 deleted successfully");
              }
            });
          }
        });
      }
    });
  }

  createJsonFiles(filePath1, filePath2, filePath3);
  deleteAllFiles();
}
module.exports = problem1;
