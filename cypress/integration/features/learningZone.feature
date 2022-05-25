Feature: Learning Zone
    As a user
    I want to visit Learning zone

    Scenario: User can visit learning zone
        Given user has browsed to the student login page
        And user "Kumar" has logged in to the class system
        When the user select learning zone menu
        Then the student should redirect to learning zone page