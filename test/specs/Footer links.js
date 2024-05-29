describe('Footer links', () => {
    it('Footer links', async () => {

        browser.url('https://www.saucedemo.com/')
        await browser.pause(2000)
        await $('[name="user-name"]').setValue('standard_user')
        await browser.pause(1500)
        const log = await $('[name="password"]')
        await (log).setValue('secret_sauce')
        await browser.pause(1500)
        await $('[type="submit"]').click()
        await browser.pause(2000)
        await $('.social_twitter').scrollIntoView();
        await browser.pause(2000)

        const assert = require('assert');
        const originalWindow = await browser.getWindowHandle();
        await $('.social_twitter').click()
        const allWindows = await browser.getWindowHandles();
        const newWindow = allWindows.find(handle => handle !== originalWindow);
        await browser.switchToWindow(newWindow);
        const newWindowUrl = await browser.getUrl();
        const expectedUrl = 'https://x.com/saucelabs';
        assert.strictEqual(newWindowUrl, expectedUrl, `Неправильна сторінка:`);
        await browser.closeWindow();
        await browser.switchToWindow(originalWindow);
        await browser.pause(2000)

        await $('.social_twitter').scrollIntoView();
        await browser.pause(2000)
        const originalWindow1 = await browser.getWindowHandle();
        await $('.social_facebook').click()
        const allWindows1 = await browser.getWindowHandles();
        const newWindow1 = allWindows1.find(handle => handle !== originalWindow1);
        await browser.switchToWindow(newWindow1);
        const newWindowUrl1 = await browser.getUrl();
        const expectedUrl1 = 'https://www.facebook.com/saucelabs';
        assert.strictEqual(newWindowUrl1, expectedUrl1, `Неправильна сторінка:`);
        await browser.closeWindow();
        await browser.switchToWindow(originalWindow1);

        await browser.pause(2000)
        await $('.social_twitter').scrollIntoView();
        await browser.pause(2000)
        const originalWindow3 = await browser.getWindowHandle();
        await $('.social_linkedin').click()
        const allWindows3 = await browser.getWindowHandles();
        const newWindow3 = allWindows3.find(handle => handle !== originalWindow3);
        await browser.switchToWindow(newWindow3);
        const newWindowUrl3 = await browser.getUrl();
        const expectedUrl3 = 'https://www.linkedin.com/company/sauce-labs/';
        assert.strictEqual(newWindowUrl3, expectedUrl3, `Неправильна сторінка:`);
        await browser.closeWindow();
        await browser.switchToWindow(originalWindow3);
        
        await browser.pause(5000)
    })
})