const Task = require("data.task");
const fs = require("fs");

// readFile :: String -> String -> Task Error String
const readFile = (filename, enc) =>
  new Task((rej, res) =>
    fs.readFile(
      filename,
      enc,
      (err, contents) => (err ? rej(err) : res(contents))
    )
  );

// readFile :: String -> String -> Task Error String
const writeFile = (filename, contents) =>
  new Task((rej, res) =>
    fs.writeFile(
      filename,
      contents,
      (err, success) => (err ? rej(err) : res(success))
    )
  );

const app = readFile("config.json", "utf-8")
  .map(contents => contents.replace(/8/g, "6"))
  .chain(contents => writeFile("config1.json", contents));

app.fork(e => console.log(e), x => console.log("success"));
