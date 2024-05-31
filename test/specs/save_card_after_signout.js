describe('saving the card after Log out', () => {
    it('Saving the card after Log out', async () => {
        browser.url('https://www.saucedemo.com/')
        await browser.pause(2000)
        await $('[name="user-name"]').setValue('standard_user')
        await browser.pause(1500)

        const log = await $('[name="password"]')
        await (log).setValue('secret_sauce')
        await browser.pause(1500)
        await $('[type="submit"]').click()
        await browser.pause(3000)
        await $('#add-to-cart-sauce-labs-backpack').click()
        await browser.pause(1500)
        await $('#shopping_cart_container').click()
        await $('[data-test="cart-list"]').isDisplayed();
        await $('#react-burger-menu-btn').click()
        await browser.pause(1000)
        await $('#inventory_sidebar_link').isDisplayed()
        await $('#about_sidebar_link').isDisplayed()
        await $('#logout_sidebar_link').isDisplayed()
        await $('#reset_sidebar_link').isDisplayed()
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

        await $('[name="user-name"]').setValue('standard_user')
        await browser.pause(1500)
        const logs = await $('[name="password"]')
        await (logs).setValue('secret_sauce')
        await browser.pause(1500)
        await $('[type="submit"]').click()
        await browser.pause(1500)
        await $('#inventory_container').isDisplayed()
        await $('#shopping_cart_container').click()
        const assert6 = require('assert');
        const divElement = await $('.shopping_cart_container');
        const spanElement = await divElement.$('.shopping_cart_badge');
        const spanExists = await spanElement.isExisting();

        assert6.strictEqual(spanExists, true, 'Тег <span> не існує в середині даного <div>');
        const spanText = await spanElement.getText();
        const containsText = spanText.trim() !== '';

        assert6.strictEqual(containsText, true, 'Тег <span> всередині <div> не містить жодного тексту');
        await browser.pause(3000)
    })
})
