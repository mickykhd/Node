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

// console.log(os.uptime() / 60);

// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf-8");
// const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

// writeFileSync("./content/result-sync-txt", `Here is the result : ${first}`, {
//   flag: "a",
// });
const { readFile, writeFile } = require("fs");
