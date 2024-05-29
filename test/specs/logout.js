describe('Log out', () => {
    it('Log out', async () => {
        browser.url('https://www.saucedemo.com/')
        await browser.pause(2000)
        await $('[name="user-name"]').setValue('standard_user')
        await browser.pause(1500)
        const log = await $('[name="password"]')
        await (log).setValue('secret_sauce')
        await browser.pause(1500)
        await $('[type="submit"]').click()
        await browser.pause(3000)
        await $('#react-burger-menu-btn').click()
        await browser.pause(1000)
        await $('#inventory_sidebar_link').isDisplayed()
        await $('#about_sidebar_link').isDisplayed()
        await $('#logout_sidebar_link').isDisplayed()
        await $('#reset_sidebar_link').isDisplayed()
        await browser.pause(1000)
        await $('#logout_sidebar_link').click()
        await browser.pause(2000)
        
        const assert = require('assert');
        const inputField = $('#user-name');
        const value = await inputField.getValue();
        assert.strictEqual(value, '', 'Це поле не пусте');
        const asserts = require('assert');
        const inputField1 = $('#password');
        const value1 = await inputField1.getValue();
        asserts.strictEqual(value1, '', 'Це поле не пусте');
        await browser.pause(2000)
    })
})
