const fs = require("fs");
const filePath1 = "./data/file1.json";
const filePath2 = "./data/file2.json";
const filePath3 = "./data/file3.json";

function problem1() {
  function deleteAllFiles() {
    fs.unlink(filePath1, (err1) => {
      if (err1) {
        console.log("Could not delete File1");
      } else {
        console.log("File1 deleted successfully");
        fs.unlink(filePath2, (err2) => {
          if (err2) {
            console.log("Could not delete File2");
          } else {
            console.log("File2 deleted successfully");
            fs.unlink(filePath3, (err3) => {
              if (err3) {
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

  function createJsonFiles(deleteAllFiles) {
    fs.writeFile(filePath1, "", (err1) => {
      if (err1) {
        console.log("error in writing file");
      } else {
        console.log("File1 wrote succssfully");
        fs.writeFile(filePath2, "", (err2) => {
          if (err2) {
            console.log("error in writing file");
          } else {
            console.log("File2 wrote succssfully");
            fs.writeFile(filePath3, "", (err3) => {
              if (err3) {
                console.log("error in writing file");
              } else {
                console.log("File3 wrote succssfully");
                deleteAllFiles();
              }
            });
          }
        });
      }
    });
  }

  createJsonFiles(deleteAllFiles);
}
module.exports = problem1;
