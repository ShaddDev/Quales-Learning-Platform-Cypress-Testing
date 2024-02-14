import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";
import { coursePage } from "@pages/CoursePage";
import { deletePage } from "@pages/DeletePage";


When("the user creates and deletes courses in a loop", () => {
    const numberOfCourses = 3; 
  
    for (let i = 1; i <= numberOfCourses; i++) {
      // Create course
      coursePage.addcourse();

      coursePage.verifyCourseCreated();
  
      // Delete course
      deletePage.deleteCourse();
  
       deletePage.confirmSuccessfulDelete();
    }
  });

  Then("The user should have created and deleted courses successfully", () => {
   
  });