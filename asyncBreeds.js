const fs = require('fs');

const print = data => console.log('Return Value: ', data);

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Callering readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (err, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!err) callback(data);
  });
};

const bombay = breedDetailsFromFile('bombay', print);