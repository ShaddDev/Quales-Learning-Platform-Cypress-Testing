import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { coursePage } from "@pages/CoursePage";

When("the user fills a course creation form", () => {
    coursePage.addcourse();
})

Then("the user should see the course created successfully prompt", () => {
    coursePage.verifyCourseCreated
} )
