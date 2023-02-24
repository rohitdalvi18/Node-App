const fs = require('fs');

let dataArray = [];

const addData = (newData) => {
  return new Promise((resolve, reject) => {
    if (newData) {
      dataArray.push(newData);
      resolve();
    } else {
      reject(new Error('Invalid data'));
    }
  });
};

const saveData = async () => {
  try {
    await addData({ id: 1, name: 'John' });
    await addData({ id: 2, name: 'Jane' });
    await addData({ id: 3, name: 'Jim' });
    // console.log(dataArray);
    fs.writeFile('./dataArray.json', JSON.stringify(dataArray), (err) => {
      if (err) throw err;
    });
  } catch (err) {
    console.error(err);
  }
};

saveData();