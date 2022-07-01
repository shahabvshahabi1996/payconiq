import LoginPage from '../support/pageObjects/LoginPage'
import InventoryPage from '../support/pageObjects/InventoryPage'
import CartPage from '../support/pageObjects/CartPage'
import CheckoutPage from '../support/pageObjects/CheckoutPage'

describe('saucedemo e2e scenario', () => {
    const loginPage = new LoginPage()
    const inventoryPage = new InventoryPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()

    before(() => {
        cy.clearCookies()
        cy.visit("/")
        cy.fixture("data").then((data) => {
            globalThis.data = data;
        })
    })

    it('Standard user e2e scenario', function () {

        loginPage.username().type(data.username).should("have.value", data.username)
        loginPage.password().type(data.password)
        loginPage.clickLoginButton()

        cy.url().should('include', 'inventory')
        inventoryPage.inventoryItem().should("have.length", data.inventoryTotalItems)
        data.productNames.forEach(function (element) {
            cy.addProductToBasket(element)
        })
        inventoryPage.cartItemCount().invoke('text').then(($cartItemCount) => {
            expect($cartItemCount).contains(data.cartItemCount)
        })
        inventoryPage.clickShoppingCart()

        cy.url().should('include', 'cart')
        cartPage.cartItems().should("have.length", data.cartItemCount)
        cartPage.cartItemName().each((item, index) => {
            cy.wrap(item).should("contain.text", data.productNames[index])
        })
        cartPage.continueShopping().should("not.be.null")
        cartPage.clickCheckout()

        cy.url().should('include', 'checkout-step-one')
        cy.enterUserDetails(data.firstName, data.lastName, data.postalCode)
        checkoutPage.cancelBtnNotNull()
        checkoutPage.clickContinue()
        cy.checkAmount(data.amountWithoutTax, data.tax, data.total)

        checkoutPage.cancelBtnNotNull()
        checkoutPage.clickFinish()
        checkoutPage.verifyThankYouMsg(data.thankYouMsg)
        checkoutPage.orderComplateMsg(data.orderCompleteMsg)
        checkoutPage.backToProductsNotNull()
    })

})
