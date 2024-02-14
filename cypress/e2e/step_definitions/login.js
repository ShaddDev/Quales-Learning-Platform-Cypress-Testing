import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";

Given("A user is on the Quales landing page", () => {
  loginPage.visitQualesApp();
});

When("the user types in their correct username and password", () => {
    loginPage.typeUsernameAndPassword()
    loginPage.clickLoginBtn()
  });

  Then("the user should be logged in to the app", () => {
    loginPage.verifySuccessfulLogin();
    
  });