Feature: Student Message Board
    As a Student
    I want to post on message board

    Scenario: User can post a text on messageboard
        Given user has browsed to the student login page
        And user "Kumar" has logged in to the class system
        And the user select text area
        And the user type text on text area
        When the user select post button
        Then the text post should be posted