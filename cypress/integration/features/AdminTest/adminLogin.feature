Feature: Admin Login
    As an admin user
    I want to login to the admin site
    So that I can create topic and course

    Scenario: Admin user can login with valid email and password
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        Then the user should be logged in to the admin system