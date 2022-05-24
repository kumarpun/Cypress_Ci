Feature: Student Login
    As a student
    I want to login to the class platform

    Scenario: Student can login to the class platform
        Given user has browsed to the student login page
        And the user "Kumar" enter school name
        And the user select group
        And the user "Kumar" enter email and password
        And the user select class login button
        Then student should be login successfully