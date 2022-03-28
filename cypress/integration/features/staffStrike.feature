Feature: Strike feature
    As a staff
    I want to interact with strike

    Scenario: Staff can go to strike page
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        When the user select login button
        And the user should be login to the system
        And the user select strike menu
        Then the strike page should be visible