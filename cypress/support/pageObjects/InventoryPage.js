class InventoryPage {

    inventoryItem() {
        return cy.get(".inventory_item")
    }

    cartItemCount() {
        return cy.get(".shopping_cart_badge")
    }

    clickShoppingCart() {
        return cy.get("#shopping_cart_container").click()
    }

}

export default InventoryPage;
