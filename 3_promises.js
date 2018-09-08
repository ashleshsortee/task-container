const fs = require("fs");

const readFile = (filename, enc) =>
  new Promise((res, rej) =>
    fs.readFile(
      filename,
      enc,
      (err, contents) => (err ? rej(err) : res(contents))
    )
  );

const writeFile = (filename, contents) =>
  new Promise((res, rej) =>
    fs.writeFile(
      filename,
      contents,
      (err, success) => (err ? rej(err) : res(success))
    )
  );

const app = readFile("config.json", "utf-8")
  .then(contents => contents.replace(/8/g, "6"))
  .then(contents => writeFile("config1.json", contents));

app.then(x => console.log("sucess")).catch(console.log);
