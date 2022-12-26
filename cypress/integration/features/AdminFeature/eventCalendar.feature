Feature: Event Calendar Feature

    Scenario: As an admin I want to visit all Calendar page
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select event Calendar option
        Then the event page should be display

    Scenario: Admin can filter event based on week and month
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select event Calendar option
        Then the event page should be display
        And the user select week tab
        Then the week data get display
        And the user select month tab
        Then the month data get display