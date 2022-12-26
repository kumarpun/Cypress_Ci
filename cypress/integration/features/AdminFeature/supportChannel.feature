Feature: Support Channel
    As an admin
    I want to go to sales support page
    So that I can interact with abandoned cart list

    Scenario: User can visit support channel page
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select chat operations option from the dropdown
        Then the table list should be display

    Scenario: User can create support channel
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select chat operations option from the dropdown
        Then the table list should be display
        And the user select create button
        And the user add channel name
        And the user add channel description
        And the user select add user button
        And the user add user in channel
        And the user click create channel button
        Then the channel should be created