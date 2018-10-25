const fs = require('fs');

//---------------
// Maths Functions
//---------------
function getRandomNumber(min, max) {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

function round(value, decimals) {
  return Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
}

function isBetween(num, low, high) {
  if (num > low && num < high) {
    return true;
  }
  return false;
}

async function readFile(filePath) {
  return new Promise(((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
    });
  }));
}

module.exports = {
  getRandomNumber,
  round,
  isBetween,
  readFile,
};
