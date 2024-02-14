import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { deletePage } from "@pages/DeletePage";

When ("the user deletes a course", () => {
    deletePage.deleteCourse();
})

Then ("the user should get a prompt displaying Course deleted successfully", () => {
    deletePage.confirmSuccessfulDelete();
})