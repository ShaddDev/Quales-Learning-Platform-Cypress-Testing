Feature: This feature ensures that the delete functioanlity on the Quales app works appropriately

As a user i want to visit the login page successfully so that i can perform some delete course functions

    Scenario: Verify that a user can login to the app
    Given A user is on the Quales landing page
    When the user types in their correct username and password
    When the user deletes a course
    Then the user should get a prompt displaying Course deleted successfully