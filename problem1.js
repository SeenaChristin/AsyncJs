const fs = require("fs");
const filePath1 = "./data/file1.json";
const filePath2 = "./data/file2.json";
const filePath3 = "./data/file3.json";
const filePaths = [filePath1, filePath2, filePath3];

function part1() {
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

function part2() {
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
  dataCreate().then(() => {
    dataDelete();
  });
}

function part3() {
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
                res(true);
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
  async function handlePromise() {
    const res = await dataCreate();
    if (res) {
      dataDelete();
    }
  }
  handlePromise();
}

module.exports = part1;
module.exports = part2;
module.exports = part3;
