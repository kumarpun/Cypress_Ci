Feature: Student Chat

    Scenario: Student can enter chat zone
        Given user has browsed to the student login page
        And user "Kumar" has logged in to the class system
        When the user select chat zone menu
        Then the chat zone should be visible