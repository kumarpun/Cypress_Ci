Feature: Chat Operation
    As an admin
    I want to visit chat operation page

    Scenario: User can visit chat operation page
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select chat operation option from the dropdown
        Then the table list should be display

    Scenario: User can filter club channel type
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select chat operation option from the dropdown
        Then the table list should be display
        And the user select club label
        Then the club channel should be display

    Scenario: User can filter syudent support channel type
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select chat operation option from the dropdown
        Then the table list should be display
        And the user select student support label
        Then the student support channel should be display