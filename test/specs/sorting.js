describe('Sorting', () => {
    it('Sorting', async () => {

        browser.url('https://www.saucedemo.com/')
        await browser.pause(2000)
        await $('[name="user-name"]').setValue('standard_user')
        await browser.pause(1500)
        const log = await $('[name="password"]')
        await (log).setValue('secret_sauce')
        await browser.pause(1500)
        await $('[type="submit"]').click()
        await browser.pause(1500)
        await $('.product_sort_container').click()
        await browser.pause(1500)
        await $('[value="az"]').click()
        const assert = require('assert');
        const inputField = $('[value="az"]');
        const value = await inputField.getValue();

        assert.strictEqual(value, 'az', 'Неправильне сортування');
        await browser.pause(1500)
        await $('[value="za"]').click()
        const assert1 = require('assert');
        const inputField1 = $('[value="za"]');
        const value1 = await inputField1.getValue();

        assert1.strictEqual(value1, 'za', 'Неправильне сортування');
        await browser.pause(1500)
        await $('[value="lohi"]').click()
        const assert2 = require('assert');
        const inputField2 = $('[value="lohi"]');
        const value2 = await inputField2.getValue();

        assert2.strictEqual(value2, 'lohi', 'Неправильне сортування');
        await browser.pause(1500)
        await $('[value="hilo"]').click()
        const assert3 = require('assert');
        const inputField3= $('[value="hilo"]');
        const value3 = await inputField3.getValue();
        
        assert3.strictEqual(value3, 'hilo', 'Неправильне сортування');
        await browser.pause(3000)
    })
})