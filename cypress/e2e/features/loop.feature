Feature: Course Management

Scenario: Login, Create, and Delete Courses
  Given A user is on the Quales landing page
  When the user types in their correct username and password
  When the user creates and deletes courses in a loop
  Then The user should have created and deleted courses successfully
