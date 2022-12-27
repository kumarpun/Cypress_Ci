Feature: Chat Feature
    As a user
    I want to go to chat page
    So that I can interact with enthuziast

@focus
    Scenario: Logged in user can go to chat page
        Given user has browsed to the login page
        And user "user2" has logged in using webUI
        When the user select chat navbar
        Then the chat page should be display

@focus
    Scenario: User can send text message in chat
        Given user has browsed to the login page
        And user "user2" has logged in using webUI
        When the user select chat navbar
        Then the chat page should be display
        And the user enter text in chat input area
        When the user select send message button
        Then the text message should be sent

@focus
    Scenario: User can search chat list based on course name
        Given user has browsed to the login page
        And user "user2" has logged in using webUI
        When the user select chat navbar
        Then the chat page should be display
        And the user type course name on search area
        Then the searched chat should be display

    # Scenario: User can send message on searched chat id
    #     Given user has browsed to the login page
    #     And user "user2" has logged in using webUI
    #     When the user select chat navbar
    #     Then the chat page should be display
    #     And the user type course name on search area
    #     Then the searched chat should be display
    #     And the user select searched chat id
    #     And the user enter text in chat input area
    #     When the user select send message button
    #     Then the text message should be sent

    Scenario: User can send bold text format in chat
        Given user has browsed to the login page
        And user "user2" has logged in using webUI
        When the user select chat navbar
        Then the chat page should be display
        And the user enter bold text in chat input area
        When the user select send message button
        Then the text message should be sent

    Scenario: User can send itallic text format in chat
        Given user has browsed to the login page
        And user "user2" has logged in using webUI
        When the user select chat navbar
        Then the chat page should be display
        And the user enter itallic text in chat input area
        When the user select send message button
        Then the text message should be sent