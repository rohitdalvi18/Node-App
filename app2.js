const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

  fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) throw err;
    const record = JSON.parse(data)
    console.log(record);
    res.send(`<h1>${record[0].fname +" "+ record[0].lname }</h1>`);
  });
});

console.log("Reading file...");

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
