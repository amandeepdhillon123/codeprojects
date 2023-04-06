// const fs= require('fs');

// fs.writeFileSync("hello.txt","i am text file")

// console.log(__dirname)

// console.log(__filename)

//                                    crud operation

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "crud");
const dirPath = `${filePath}/ram.txt`;
// console.log(firPath)

// create file

// fs.writeFileSync(dirPath,"helloo amandeep")

// read file
fs.readFile(dirPath, "utf-8", (err, item) => {
  console.log(item);
});

//   append file data

fs.appendFile(dirPath, "hello guys how ar eyou all", (err) => {
  if (!err) {
    console.log("suceesful");
  }
});

// rename

fs.rename(dirPath, `${filePath}/hit.txt`, (err) => {
  if (!err) console.log("file name is succesful");
});

// unlink

// fs.unlinkSync(`${filePath/ram.txt}`)

const express = require("express");

const app = express();

app.get("", (req, resp) => {
  resp.send(` hello guys   <a href="/about">go to home PAge</a>`);
});
app.get("/about", (req, resp) => {
  resp.send("<h1>hello this is about page</h1>");
});
app.get("/help", (req, resp) => {
  resp.send({
    name: "amandeep",
    email: "xyz@gmaul",
  } );
});

app.listen(2145);
