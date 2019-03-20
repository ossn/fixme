const package = require("./package.json");

var version = process.versions.node.split(".");
if (version[0] < 8) {
  // tslint:disable-next-line:no-console
  console.log("❗️❗️ This project requires Node.js version >= 8.10 ❗️❗️");
}
