Feature: login
    As a user
    I want to log in to the Enthuziastic system
    So that I can attent an event

    Background:
        Given user has browsed to the login page

    Scenario: User can log in with a valid email and password
        When the user enters the email "test@enthu.com" and password "Test@1234"
        And the user tries to log in to the system
        Then the user should be logged in to the enthuziastic system

    Scenario: User can not log in with an empty email and password
        When the user tries to log in to the system
        Then the user should not be logged in to the enthuziastic system

    Scenario: User can not log in with an invalid password
        When the user enters the email "test@enthu.com" and password "Test@123456"
        And the user tries to log in to the system
        Then the user should get incorrect username or password error message

    Scenario: User can not log in with an email that is not registered
        When the user enters the email "test10@enthu.com" and password "Test@1234"
        And the user tries to log in to the system
        Then the user should get incorrect username or password error message

    Scenario: User can not log in with only email field
        When the user enters the email "test10@enthu.com" and password ""
        And the user tries to log in to the system
        Then the user should not be logged in to the enthuziastic system

    Scenario: User can not log in with only password field
        When the user enters the email "" and password "Test@1234"
        And the user tries to log in to the system
        Then the user should not be logged in to the enthuziastic system

