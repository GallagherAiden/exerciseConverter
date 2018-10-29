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

function checkType(a, type) {
  const thisType = typeof (a);
  if (thisType !== type) {
    throw new Error(`Expected ${type} but instead got ${thisType} for ${a}`);
  }
}

function convertToIntensity(ahr) {
  switch (true) {
    case (ahr < 70):
      return 1;
    case (ahr > 69 && ahr < 90):
      return 2;
    case (ahr > 89 && ahr < 120):
      return 3;
    case (ahr > 119 && ahr < 150):
      return 4;
    case (ahr > 149):
      return 5;
    default:
      return 3;
  }
}

module.exports = {
  getRandomNumber,
  round,
  isBetween,
  readFile,
  checkType,
  convertToIntensity,
};
