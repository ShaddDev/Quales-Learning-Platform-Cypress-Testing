class LoginPage {
    elements = {
        openApp: () => cy.visit("/login"),
        usernameInputField: () => cy.get('[data-testid="EmailAddress"]'),
        passwordInputField: () => cy.get('[data-testid="Password"]'),
        loginBtn: () => cy.get('.MuiButton-contained'),
        addCourseBtn: () => cy.contains('Add Course')

    };

    visitQualesApp() {
        this.elements.openApp();
    };

    typeUsernameAndPassword(){
        this.elements.usernameInputField().type(Cypress.env("emailaddress"));
        this.elements.passwordInputField().type(Cypress.env("password"));
    };

    clickLoginBtn(){
        this.elements.loginBtn().click();
    };

    verifySuccessfulLogin() {
        this.elements.addCourseBtn().should("be.visible");
    }
}

export const loginPage = new LoginPage();