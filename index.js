const common = require('./lib/common')

async function toSteps(exercise, intensity, minutes) {
  common.checkType(exercise, 'string')
  common.checkType(intensity, 'number')
  common.checkType(minutes, 'number')
  const conversions = await common.readFile('config/exerciseToSteps.json')
  const thisExercise = (conversions[exercise.toLowerCase()]) ? conversions[exercise.toLowerCase()] : 'void'
  const thisIntensity = intensity - 1
  if (thisExercise !== 'void') {
    if (common.isBetween(thisIntensity, -1, thisExercise.length)) return thisExercise[thisIntensity] * minutes
    throw new Error(`Please provide an intensity between 1 and ${thisExercise.length}`)
  }
  throw new Error(`Unrecognised exercise: ${exercise}`)
}

async function toStepsAvgHR(exercise, ahr, minutes) {
  common.checkType(exercise, 'string')
  common.checkType(ahr, 'number')
  common.checkType(minutes, 'number')
  const conversions = await common.readFile('config/exerciseToSteps.json')
  const thisExercise = (conversions[exercise.toLowerCase()]) ? conversions[exercise.toLowerCase()] : 'void'
  const thisIntensity = common.convertToIntensity(ahr) - 1
  if (thisExercise !== 'void') {
    if (common.isBetween(thisIntensity, -1, thisExercise.length)) return thisExercise[thisIntensity] * minutes
  }
  throw new Error(`Unrecognised exercise: ${exercise}`)
}

async function toStepsHRpm(exercise, hrpm) {
  let totalSteps = 0
  common.checkType(exercise, 'string')
  common.checkType(hrpm, 'object')
  const conversions = await common.readFile('config/exerciseToSteps.json')
  const thisExercise = (conversions[exercise.toLowerCase()]) ? conversions[exercise.toLowerCase()] : 'void'
  hrpm.forEach((thishr) => {
    const thisIntensity = common.convertToIntensity(thishr) - 1
    if (thisExercise !== 'void') {
      if (common.isBetween(thisIntensity, -1, thisExercise.length)) {
        totalSteps += thisExercise[thisIntensity]
        return 0
      }
    }
    throw new Error(`Unrecognised exercise: ${exercise}`)
  })
  return totalSteps
}

module.exports = {
  toSteps,
  toStepsAvgHR,
  toStepsHRpm,
}
