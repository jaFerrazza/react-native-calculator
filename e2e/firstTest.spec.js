describe('Example', () => {

  before(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should add two numbers', async () => {
    await element(by.text('2')).tap();
    await element(by.text('+')).tap();
    await element(by.text('3')).tap();
    await element(by.text('=')).tap();

    await expect(element(by.text('5'))).toExist();
  });
});
