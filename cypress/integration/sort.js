import LoginPage from '../support/pageObjects/LoginPage'
import InventoryPage from '../support/pageObjects/InventoryPage'

describe('All Sort Functionality', () => {
    const loginPage = new LoginPage()
    const inventoryPage = new InventoryPage()

    before(() => {
        cy.clearCookies({ log: false })
        cy.visit("/")
        cy.fixture("data").then((data) => {
            globalThis.data = data;
        })
    })

    it('Check inventory items and sort', function () {
        loginPage.username().type(data.username).should("have.value", data.username)
        loginPage.password().type(data.password, { log: false })
        loginPage.clickLoginButton()
        cy.url().should('include', 'inventory')
        inventoryPage.sortProducts().should("have.value", 'az')
        inventoryPage.inventoryItem().should("have.length", data.inventoryTotalItems)
    })

    it('Sort Z -> A', function () {
        cy.sortItems('za', data.tShirtRed)
    })

    it('Sort Low -> High', function () {
        cy.sortItems('lohi', data.lowestOnesie)
    })

    it('Sort High -> Low', function () {
        cy.sortItems('hilo', data.fleeceJacket)
    })

})