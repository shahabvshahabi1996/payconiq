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

    sortProducts() {
        return cy.get('[data-test="product_sort_container"]')
    }

}

export default InventoryPage;
