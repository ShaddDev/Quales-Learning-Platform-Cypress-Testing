Feature: This feature ensures that the course creation functioanlity on the Quales app works appropriately

As a user i want to visit the login page successfully so that i can perform some course management functions

Scenario: Verify that a user can create course on the app
    Given A user is on the Quales landing page
    When the user types in their correct username and password
    When the user fills a course creation form
    Then the user should see the course created successfully prompt