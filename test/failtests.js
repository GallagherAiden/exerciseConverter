const mocha = require('mocha')
const { expect } = require('chai')
const common = require('../lib/common')
const ets = require('../index.js')


mocha.describe('FailToStepsCalls()', () => {
  mocha.it('Aerobics - 200 intensity - 3 minutes', async () => {
    try {
      const thisResult = await ets.toSteps('aerobics', 200, 3)
    } catch (err) {
      expect(err).to.be.an('Error')
      let expectedOutput = 'Please provide an intensity between 1 and 5'
      expect(err.toString()).to.have.string(expectedOutput)
    }
  })
  mocha.it('Aerobiacs - 2 intensity - 3 minutes', async () => {
    try {
      const thisResult = await ets.toSteps('aerobiancs', 2, 3)
    } catch (err) {
      expect(err).to.be.an('Error')
      let expectedOutput = 'Unrecognised exercise: aerobiancs'
      expect(err.toString()).to.have.string(expectedOutput)
    }
  })
})

mocha.describe('FailtoStepsAvgHRCalls()', () => {
  mocha.it('Aerobiancs - 2 intensity - 3 minutes', async () => {
    try {
      const thisResult = await ets.toStepsAvgHR('aerobiancs', 60, 3)
    } catch (err) {
      expect(err).to.be.an('Error')
      let expectedOutput = 'Unrecognised exercise: aerobiancs'
      expect(err.toString()).to.have.string(expectedOutput)
    }
  })
})

mocha.describe('FailToStepsHRpmCalls()', () => {
  mocha.it('Aerobics - heart rates over 10 minutes', async () => {
    try {
      const thisResult = await ets.toStepsHRpm('aerobiancs', [120, 140, 150, 165, 180, 176, 162, 104, 101, 80])
    } catch (err) {
      expect(err).to.be.an('Error')
      let expectedOutput = 'Unrecognised exercise: aerobiancs'
      expect(err.toString()).to.have.string(expectedOutput)
    }
  })
})