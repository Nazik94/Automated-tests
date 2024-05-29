describe('Log in with invalid password', () => {
    it('Log in with invalid password', async () => {

        browser.url('https://www.saucedemo.com/')
        await browser.pause(2000)
        await $('[name="user-name"]').setValue('standard_user')
        
        const assert = require('assert');
        const inputField = $('#user-name');
        const value = await inputField.getValue();
        assert.strictEqual(value, 'standard_user', 'Неправильний логін');

        await browser.pause(1500)
        await $('[name="password"]').setValue('1234')
        const asserts = require('assert');
        const inputField1 = $('#password');
        const value1 = await inputField1.getValue();
        asserts.strictEqual(value1, '1234', 'Цей пароль неправильний');
        
        await browser.pause(1500)
        await $('[type="submit"]').click()
        await $('[data-test="error-button]').isDisplayed()
        await expect($('[data-test="error"')).toHaveText('Epic sadface: Username and password do not match any user in this service')
        await browser.pause(3000)
    })
})
