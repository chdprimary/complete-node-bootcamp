// CommonJS import
// const fs = require("fs");

// ES6 module version
import { readFile, writeFile, readFileSync, writeFileSync } from "fs";

console.log("Synchronous file reading/writing...");
const textIn = readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;
writeFileSync("./txt/output.txt", textOut);

console.log("Async file reading/writing...");
readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("Will read file!"); // Printed before callback

console.log("Callback hell...");
readFile("./txt/start.txt", "utf-8", (err, data1) => {
  // if (err) return console.error("ERROR! 💥");
  readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been written");
      });
    });
  });
});
console.log("Will read file!"); // Printed before callback
