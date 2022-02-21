Feature: Help request
    As a staff
    I want to view help request
    So that I can manage student help request

    Scenario: Staff can view help request page
       Given user has browsed to the login page
       And user "Principal" has logged in to the system
       And the user select login button
       And the user should be login to the system
       When the user select help request menu
       Then the help request page should be display

    Scenario: Student can request help to staff
        Given user has browsed to the student login page
        And user "Kumar" has logged in to the class system
        And the user select need help button
        And the user select inside school help button
        And the user request help for himself

    Scenario: Staff can accept student help request via message approach
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        And the user select login button
        And the user should be login to the system
        And the user select help request menu
        And the user select accept button on recent help request
        And the user select chat message approach
        And the user enter messages in text area
        When the user select send icon in the text area
        Then the message should be sent

    Scenario: Staff can complete valid help request
       Given user has browsed to the login page
       And user "Principal" has logged in to the system
       And the user select login button
       And the user should be login to the system
       And the user select help request menu
       And the user select complete icon on recent help request accepted
       And the user enter complete reason
       When the user select complete button
       Then the help request should be completed