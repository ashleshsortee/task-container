const fs = require("fs");

const app = () =>
  fs.readFile("config.json", "utf-8", (err, contents) => {
    if (err) throw err;

    const newContents = contents.replace(/8/g, "6");

    fs.writeFile("config.json", newContents, (err, _) => {
      if (err) throw err;
      console.log("success!");
    });
  });