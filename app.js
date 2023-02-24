const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = [];

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.post('/add', (req, res) => {
  const record = req.body;
  const obj = {
    fname: record.fname,
    lname: record.lname
  }
  data.push(obj);
  fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving data');
    }
    res.status(200).send(`<h2>Data saved successfully :)</h2>`);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
