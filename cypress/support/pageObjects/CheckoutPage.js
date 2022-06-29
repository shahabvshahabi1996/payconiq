//  https://www.saucedemo.com/cart.html

class CheckoutPage {

    cancelBtnNotNull() {
        return cy.get("#cancel").should("be.visible")
    }

    clickContinue() {
        return cy.get("#continue").click()
    }

    clickFinish() {
        return cy.get("#finish").click()
    }

    backToProductsNotNull() {
        return cy.get("#back-to-products").should("not.be.null")
    }

    verifyThankYouMsg(thankYouMessage) {
        return cy.get(".complete-header").invoke('text').then(($thankYouMsg) => {
            expect($thankYouMsg).contains(thankYouMessage)
        })
    }

    orderComplateMsg(orderCompleteMessage) {
        return cy.get(".complete-text").invoke('text').then(($orderComplete) => {
            expect($orderComplete).contains(orderCompleteMessage)
        })
    }


}

export default CheckoutPage;
