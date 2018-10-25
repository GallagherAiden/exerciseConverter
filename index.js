const common = require('./lib/common');

async function toSteps(exercise, intensity, minutes) {
  common.checkType(exercise, 'string');
  common.checkType(intensity, 'number');
  common.checkType(minutes, 'number');
  const conversions = await common.readFile('config/exerciseToSteps.json');
  const thisExercise = (conversions[exercise.toLowerCase()]) ? conversions[exercise.toLowerCase()] : 'void';
  const thisIntensity = intensity - 1;
  if (thisExercise !== 'void') {
    if (common.isBetween(thisIntensity, -1, thisExercise.length)) {
      return thisExercise[thisIntensity] * minutes;
    }
    throw new Error(`Please provide an intensity between 1 and ${thisExercise.length}`);
  }
  return new Error(`Unrecognised exercise: ${exercise}`);
}

module.exports = {
  toSteps,
};
