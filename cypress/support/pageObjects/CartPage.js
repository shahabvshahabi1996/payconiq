class CartPage {

    cartItems() {
        return cy.get(".cart_item")
    }

    cartItemName() {
        return cy.get(".inventory_item_name")
    }

    continueShopping() {
        return cy.get("[data-test='continue-shopping']")
    }

    clickCheckout() {
        return cy.get("[data-test='checkout']").click()
    }

}

export default CartPage;
