class LoginPage {

    username() {
        return cy.get("#user-name")
    }

    password() {
        return cy.get("#password")
    }

    clickLoginButton() {
        return cy.get("#login-button").click()
    }

}

export default LoginPage;
