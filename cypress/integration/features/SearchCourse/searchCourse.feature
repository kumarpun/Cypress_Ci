Feature: Search Course
    As a user
    I want to search the courses available in the Enthuziastic system
    So that I can view the details of courses

    Scenario: Visitor user can search a course
        Given user has browsed to the Enthuziastic website
        When user selects the courses link
        And the user enters the course "Test Custom Topic Creation"
        # When the user select search icon
        Then the searched course should be display

    Scenario: Logged in user can search course
        Given user has browsed to the login page
        And user "user1" has logged in using webUI
        When user selects the courses link
        And the user enters the course "Test Custom Topic Creation"
        # And the user select search icon
        Then the searched course should be display

    Scenario: Visitor user can see course detail
        Given user has browsed to the Enthuziastic website
        When user selects the courses link
        And the user enters the course "Test Custom Topic Creation"
        # And the user select search icon
        When the user select test course link
        Then the course detail should be display