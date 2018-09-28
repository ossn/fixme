const package = require('./package.json')

var version = process.versions.node.split(".");
if (version[0] < 8) {
	console.log("❗️❗️ This project requires Node.js version >= 8.10 ❗️❗️");
} else {
	console.log("Got a problem during installation? Don't forget to report it in our repository");
}