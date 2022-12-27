Feature: Contact Operation
    As an admin
    I want to visit contact operation page

    Scenario: User can visit contact operation page
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select contact operation option from the dropdown
        Then the table list should be display

    Scenario: User can update contact group info
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select contact operation option from the dropdown
        Then the table list should be display
        And the user select contact group row
        And the user select edit mode button
        And the user enter group name
        When the user select save button
        Then the contact group should be updated

    Scenario: User can view list of contacts in particular contact group
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select contact operation option from the dropdown
        Then the table list should be display
        And the user select contact group row
        And the user select contact tab
        Then the contact list should be display

    Scenario: User can visit contact page
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select contact operation option from the dropdown
        Then the table list should be display
        And the user select contact link
        Then the table list should be display