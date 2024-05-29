describe('Log in with invalid login', () => {
    it('Log in with invalid login', async () => {

        browser.url('https://www.saucedemo.com/')
        await browser.pause(2000)
        await $('[name="user-name"]').setValue('secret')

        const assert = require('assert');
        const inputField = $('#user-name');
        const value = await inputField.getValue();
        assert.strictEqual(value, 'secret', 'Неправильний логін');

        await browser.pause(1500)
        const log = await $('[name="password"]')
        await (log).setValue('secret_sauce')
        await browser.pause(1500)
        await $('[type="submit"]').click()
        await $('[data-test="error-button]').isDisplayed()
        await expect($('[data-test="error"')).toHaveText('Epic sadface: Username and password do not match any user in this service')
        await browser.pause(3000)
    })
})