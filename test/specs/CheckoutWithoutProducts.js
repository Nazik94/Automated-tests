describe('Log in varification', () => {
    it('Log in', async () => {

        browser.url('https://www.saucedemo.com/')
        await browser.pause(2000)
        await $('[name="user-name"]').setValue('standard_user')
        await browser.pause(1500)
        const log = await $('[name="password"]')
        await (log).setValue('secret_sauce')
        await browser.pause(1500)
        await $('[type="submit"]').click()
        await browser.pause(2000)
        await $('#shopping_cart_container').click()

        const assert5 = require('assert');
        const spanElement = await $('.shopping_cart_link');
        const spanText = await spanElement.getText();
        assert5.strictEqual(spanText, '', 'Кошик не порожній');
        await browser.pause(2000)
        await $('#checkout').click()
        await browser.pause(2000)

        const assert = require('assert');
        const divElement1= await $('#page_wrapper');
        const errorElement1 = await divElement1.$('[data-test="error"');
        const errorExists1 = await errorElement1.isExisting();
assert.strictEqual(errorExists1, true, '"Error message" не існує всередині <div>');
        await expect($('[data-test="error"')).toHaveText('Cart is empty')
        await browser.pause(3000)
    })
})
