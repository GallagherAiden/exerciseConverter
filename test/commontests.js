const mocha = require('mocha')
const { expect } = require('chai')
const common = require('../lib/common')

mocha.describe('commonTestsRandomNumber()', () => {
    mocha.it('random number positive', async () => {
        let thisNumber = common.getRandomNumber(0, 1)
        try {
            expect(thisNumber).to.eql(1)
        } catch{
            expect(thisNumber).to.eql(0)
        }
    })
    mocha.it('random number 0', async () => {
        let thisNumber = common.getRandomNumber(0, 0)
        expect(thisNumber).to.eql(0)
    })
    mocha.it('random number negative', async () => {
        let thisNumber = common.getRandomNumber(-5, -5)
        expect(thisNumber).to.eql(-5)
    })
})
mocha.describe('commonTestsRound()', () => {
    mocha.it('round to two decimal places', async () => {
        let thisNumber = common.round(0.1234, 2)
        expect(thisNumber).to.eql(0.12)
    })
    mocha.it('round to zero decimal places', async () => {
        let thisNumber = common.round(12.1234, 0)
        expect(thisNumber).to.eql(12)
    })
    mocha.it('round a negative number to three decimal places', async () => {
        let thisNumber = common.round(-99.1234, 3)
        expect(thisNumber).to.eql(-99.123)
    })
})
mocha.describe('commonTestsIsBetween()', () => {
    mocha.it('is between', async () => {
        let between = common.isBetween(1, 0, 2)
        expect(between).to.eql(true)
    })
    mocha.it('not between', async () => {
        let between = common.isBetween(12, 0, 12)
        expect(between).to.eql(false)
    })
})
mocha.describe('commonTestsTypes()', () => {
    mocha.it('correct type', async () => {
        let thisCheck = common.checkType('boxing', 'string');
        expect(thisCheck).to.eql(true)
    })
    mocha.it('incorrect type', async () => {
        try {
            let thisCheck = common.checkType(3, 'string');
        } catch (err) {
            expect(err).to.be.an('Error')
            let expectedOutput = 'Expected string but instead got number for 3'
            expect(err.toString()).to.have.string(expectedOutput)
        }
    })
})