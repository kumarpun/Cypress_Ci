Feature: Calendar Feature
    As a user
    I want to go to Calendar page
    So that I can view the course meeting date and time

    Scenario: User can visit calendar page
        Given user has browsed to the login page
        And user "user2" has logged in using webUI
        When  the user select calendar menu
        Then the calendar data should be display

    Scenario: User can filter calendar based on week
        Given user has browsed to the login page
        And user "user2" has logged in using webUI
        When  the user select calendar menu
        Then the calendar data should be display
        And the user select week tab
        Then the week day should be visible

    Scenario: User can filter calendar based on month
        Given user has browsed to the login page
        And user "user2" has logged in using webUI
        When  the user select calendar menu
        Then the calendar data should be display
        And the user select mon tab
        Then the month should be visible