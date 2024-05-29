describe('Valid checkout', () => {
    it('Valid Checkout', async () => {

        browser.url('https://www.saucedemo.com/')
        await browser.pause(2000)
        await $('[name="user-name"]').setValue('standard_user')
        await browser.pause(1500)
        const log = await $('[name="password"]')
        await (log).setValue('secret_sauce')
        await browser.pause(1500)
        await $('[type="submit"]').click()
        await browser.pause(3000)
        await $('#add-to-cart-sauce-labs-backpack ').click()
        await expect($('[data-test="shopping-cart-badge"')).toHaveText('1')
        await browser.pause(2000)
        await $('#shopping_cart_container').click()
        await browser.pause(2000)
        const assert9 = require('assert');

        const parentElement4 = await $('.cart_list');
        
        const childElements = await parentElement4.$$('.cart_item'); 
       
        const numberOfChildElements = childElements.length;
        
        const spanElement2 = await $('.shopping_cart_badge');
        
        const spanText4 = await spanElement2.getText();
        
        const spanNumber = parseInt(spanText4, 10);
    
        assert9.strictEqual(numberOfChildElements, spanNumber, `Кількість дочірніх елементів не співпадає зі значенням span`)

        
        await $('#checkout').click()
        await browser.pause(1000)
        await $('#checkout-info').isDisplayed()
        await $('#first-name').setValue('Its')

        const assert = require('assert');
        const inputField= $('#first-name');
        const value = await inputField.getValue();

        assert.strictEqual(value, 'Its', 'Неправильне імя');
        await browser.pause(1500)
        await $('#last-name').setValue('Me')
        const assert2 = require('assert');
        const inputField2= $('#last-name');
        const value2 = await inputField2.getValue();

        assert2.strictEqual(value2, 'Me', 'Неправильне прізвище');
        await browser.pause(1500)
        await $('#postal-code').setValue('79099')
        const assert3 = require('assert');
        const inputField3= $('#postal-code');
        const value3 = await inputField3.getValue();

        assert3.strictEqual(value3, '79099', 'Неправильний посткод');
        await browser.pause(1500)
        await $('#continue').click()
        await $('[data-test="cart-list"]').isEqual(await $('[data-test="cart-list"]'))
        await browser.pause(1500)
        await $('#finish').click()
        const assert4 = require('assert');
        const expectedUrl = 'https://www.saucedemo.com/checkout-complete.html'
        const currentUrl = await browser.getUrl();

        assert4.strictEqual(currentUrl, expectedUrl, 'URL-адреса не відповідає очікуваній')
        await expect($('[data-test="complete-header"')).toHaveText('Thank you for your order!')
        await browser.pause(1500)
        await $('#back-to-products').click()
        await browser.pause(1500)
        const assert5 = require('assert');
        const spanElement = await $('.shopping_cart_link');
        const spanText = await spanElement.getText();

        assert5.strictEqual(spanText, '', 'Кошик не порожній');
        await browser.pause(3000)






    })
})
