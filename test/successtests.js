const mocha = require('mocha')
const { expect } = require('chai')
const common = require('../lib/common')
const ets = require('../index.js')

mocha.describe('dataTests()', () => {
  mocha.it('key array should be length - 5', async () => {
    common.readFile('config/exerciseToSteps.json').then((data) => {
      Object.keys(data).forEach((key) => {
        expect(data[key].length).to.equal(5)
      })
    })
  })
})
mocha.describe('convertHRtoIntensity()', () => {
  mocha.it('HR 40 - intensity 1', async () => {
    const intensity = common.convertToIntensity(40)
    expect(intensity).to.equal(1)
  })
  mocha.it('HR 69 - intensity 1', async () => {
    const intensity = common.convertToIntensity(69)
    expect(intensity).to.equal(1)
  })
  mocha.it('HR 72 - intensity 2', async () => {
    const intensity = common.convertToIntensity(72)
    expect(intensity).to.equal(2)
  })
  mocha.it('HR 89 - intensity 2', async () => {
    const intensity = common.convertToIntensity(89)
    expect(intensity).to.equal(2)
  })
  mocha.it('HR 91 - intensity 3', async () => {
    const intensity = common.convertToIntensity(91)
    expect(intensity).to.equal(3)
  })
  mocha.it('HR 119 - intensity 3', async () => {
    const intensity = common.convertToIntensity(119)
    expect(intensity).to.equal(3)
  })
  mocha.it('HR 120 - intensity 4', async () => {
    const intensity = common.convertToIntensity(120)
    expect(intensity).to.equal(4)
  })
  mocha.it('HR 149 - intensity 4', async () => {
    const intensity = common.convertToIntensity(149)
    expect(intensity).to.equal(4)
  })
  mocha.it('HR 180 - intensity 5', async () => {
    const intensity = common.convertToIntensity(180)
    expect(intensity).to.equal(5)
  })
})

mocha.describe('SuccessToStepsCalls()', () => {
  mocha.it('Aerobics - 2 intensity - 3 minutes', async () => {
    const thisResult = await ets.toSteps('aerobics', 2, 3)
    expect(thisResult).to.equal(471)
  })
  mocha.it('Judo - 5 intensity - 1 minute', async () => {
    const thisResult = await ets.toSteps('judo', 5, 1)
    expect(thisResult).to.equal(348)
  })
  mocha.it('Stretching - 4 intensity - 8 minutes', async () => {
    const thisResult = await ets.toSteps('stretching', 4, 8)
    expect(thisResult).to.equal(632)
  })
})

mocha.describe('SuccesstoStepsAvgHRCalls()', () => {
  mocha.it('Aerobics - 60 Average Heart Rate - 3 minutes', async () => {
    const thisResult = await ets.toStepsAvgHR('aerobics', 60, 3)
    expect(thisResult).to.equal(435)
  })
  mocha.it('Judo - 80 Average Heart Rate - 1 minute', async () => {
    const thisResult = await ets.toStepsAvgHR('judo', 80, 1)
    expect(thisResult).to.equal(261)
  })
  mocha.it('Stretching - 100 Average Heart Rate - 8 minutes', async () => {
    const thisResult = await ets.toStepsAvgHR('stretching', 100, 8)
    expect(thisResult).to.equal(576)
  })
  mocha.it('Walking - 130 Average Heart Rate - 8 minutes', async () => {
    const thisResult = await ets.toStepsAvgHR('swimming', 130, 8)
    expect(thisResult).to.equal(2320)
  })
  mocha.it('Running - 160 Average Heart Rate - 8 minutes', async () => {
    const thisResult = await ets.toStepsAvgHR('running', 160, 10)
    expect(thisResult).to.equal(4630)
  })
})

mocha.describe('SuccessToStepsHRpmCalls()', () => {
  mocha.it('Aerobics - heart rates over 10 minutes', async () => {
    const thisResult = await ets.toStepsHRpm('aerobics', [120, 140, 150, 165, 180, 176, 162, 104, 101, 80])
    expect(thisResult).to.equal(1872)
  })
  mocha.it('Judo - heart rates over 20 minutes', async () => {
    const thisResult = await ets.toStepsHRpm('judo', [65, 75, 80, 80, 80, 85, 87, 89, 94, 95, 95, 93, 90, 88, 86, 83, 85, 82, 73, 65])
    expect(thisResult).to.equal(5307)
  })
  mocha.it('Stretching - 4 intensity - 8 minutes', async () => {
    const thisResult = await ets.toStepsHRpm('stretching', [140])
    expect(thisResult).to.equal(79)
  })
})

mocha.describe('caseInsensitive()', () => {
  mocha.it('allLowerCaseActivity', async () => {
    let thisResult = await ets.toSteps('aerobics', 2, 3)
    expect(thisResult).to.equal(471)
    thisResult = await ets.toStepsAvgHR('aerobics', 80, 3)
    expect(thisResult).to.equal(471)
    thisResult = await ets.toStepsHRpm('aerobics', [80])
    expect(thisResult).to.equal(157)
  })
  mocha.it('allUpperCaseActivity', async () => {
    let thisResult = await ets.toSteps('JUDO', 5, 1)
    expect(thisResult).to.equal(348)
    thisResult = await ets.toStepsAvgHR('JUDO', 180, 1)
    expect(thisResult).to.equal(348)
    thisResult = await ets.toStepsHRpm('JUDO', [100, 80])
    expect(thisResult).to.equal(551)
  })
  mocha.it('allCamelCaseActivity', async () => {
    let thisResult = await ets.toSteps('StreTCHing', 4, 8)
    expect(thisResult).to.equal(632)
    thisResult = await ets.toStepsAvgHR('StreTCHing', 130, 8)
    expect(thisResult).to.equal(632)
    thisResult = await ets.toStepsHRpm('StreTCHing', [42, 42, 42, 42, 43, 44, 45, 45])
    expect(thisResult).to.equal(464)
  })
})
