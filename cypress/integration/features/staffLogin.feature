Feature: User login
    As a Staff User
    I want to log in to the digii social staff platform
    So that I can manage student actions

    Scenario: Staff can login with valid email and password
        Given user has browsed to the login page
        And the user enter email "cumarpun1234+automation@gmail.com" and password "qwertyuiop"
        When the user select login button
        Then the user should be login to the system