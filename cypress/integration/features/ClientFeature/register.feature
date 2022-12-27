Feature: register
    As a new user
    I want to register to the Enthuziastic system
    So that I can log in to my account

    Scenario: New user can register with a valid email and password
        Given user has browsed to the login page
        When the user selects the sign up button
        And the user enters the email "%unique_email%" and password "%common_password%"
        And the user tries to register in to the system
        Then the user should be registered in to the system