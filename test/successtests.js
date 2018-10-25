const mocha = require('mocha');
const { expect } = require('chai');
const common = require('../lib/common');
const ets = require('../index.js');

mocha.describe('dataTests()', () => {
  mocha.it('key array should be length - 5', async () => {
    common.readFile('config/exerciseToSteps.json').then((data) => {
      Object.keys(data).forEach((key) => {
        expect(data[key].length).to.equal(5);
      });
    });
  });
});

mocha.describe('SuccessCalls()', () => {
  mocha.it('Aerobics - 2 intensity - 3 minutes', async () => {
    const thisResult = await ets.toSteps('aerobics', 2, 3);
    expect(thisResult).to.equal(471);
  });
  mocha.it('Judo - 5 intensity - 1 minute', async () => {
    const thisResult = await ets.toSteps('judo', 5, 1);
    expect(thisResult).to.equal(348);
  });
  mocha.it('Stretching - 4 intensity - 8 minutes', async () => {
    const thisResult = await ets.toSteps('stretching', 4, 8);
    expect(thisResult).to.equal(632);
  });
});

mocha.describe('caseInsensitive()', () => {
  mocha.it('allLowerCaseActivity', async () => {
    const thisResult = await ets.toSteps('aerobics', 2, 3);
    expect(thisResult).to.equal(471);
  });
  mocha.it('allUpperCaseActivity', async () => {
    const thisResult = await ets.toSteps('JUDO', 5, 1);
    expect(thisResult).to.equal(348);
  });
  mocha.it('allCamelCaseActivity', async () => {
    const thisResult = await ets.toSteps('StreTCHing', 4, 8);
    expect(thisResult).to.equal(632);
  });
});
