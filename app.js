// const amount = 9;

// if (amount < 10) {
//   console.log("small number");
// } else if (amount < 20) {
//   console.log("medium number");
// } else {
//   console.log("large number");
// }

// console.log(`hello world`);

// console.log(__dirname);
// console.log(require);
// const ab = 1;
// setInterval(() => {
//   console.log(ab + 1);
// }, 1000);
// const name = require("./names.js");
// console.log(name);
// const os = require("os");
// const user = os.userInfo();
// console.log(user);

// console.log(os.uptime());

// const path = require("path");
// const fs = require("fs");
// const os = require("os");
// const user = os.userInfo();
// console.log(user);

// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     return;
//   }
//   const first = result;

//   readFile("./content/second.txt", "utf-8", (err, result) => {
//     if (err) {
//       return;
//     }
//     const second = result;
//     writeFile("./content/resultAsync.txt", "hekllp", (err, result) => {
//       if (err) {
//         return;
//       }
//       console.log(result);
//     });
//   });
// });
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("hey there");
//   } else if (req.url === "/about") {
//     res.end("here is our about");
//   } else {
//     res.end(`
//       <h1>Wrong path</h1>

//       `);
//   }
// });
// console.log(http);

// server.listen(5000);
// console.log(`server is running on port 5000`);
// console.log("hi");

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url === "/") {
//     res.end("hey there");
//   } else if (req.url === "/about") {
//     res.end("here is our about");
//   } else {
//     res.end(`
//       <h1>Wrong path</h1>

//       `);
//   }
// });

// server.listen(5000, () => {
//   console.log("server is running on port 5000");
// });

// const EventEmitter = require("events");

// const customEmitter = new EventEmitter();

// customEmitter.on("response", (name, age) => {
//   console.log(`data ${name} ${age}`);
// });
// customEmitter.on("response", () => {
//   console.log("other stuff");
// });

// customEmitter.emit("response", "micky", 29);

const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("welcome");
// });

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(5000);
