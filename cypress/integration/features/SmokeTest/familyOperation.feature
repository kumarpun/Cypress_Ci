Feature: Family Operations

    Scenario: User can visit family operations page
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select family operations option from the dropdown
        Then the table list should be display