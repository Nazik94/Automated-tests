describe('Log in with valid data', () => {
    it('Log in', async () => {

        browser.url('https://www.saucedemo.com/')
        await browser.pause(2000)
        await $('[name="user-name"]').setValue('standard_user')
        const assert = require('assert');
        const inputField = $('#user-name');

        const value = await inputField.getValue();
        assert.strictEqual(value, 'standard_user', 'Неправильний логін');
        await browser.pause(1500)
        const log = await $('[name="password"]')
        await (log).setValue('secret_sauce')
        const asserts = require('assert');
        const inputField1 = $('#password');
        const value1 = await inputField1.getValue();
        
        asserts.strictEqual(value1, 'secret_sauce', 'Цей пароль неправильний');
        await browser.pause(1500)
        await $('[type="submit"]').click()
        await $('#inventory_container').isDisplayed()
        await browser.pause(2000)
    })
})
