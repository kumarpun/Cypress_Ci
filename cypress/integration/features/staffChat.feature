Feature: Staff chat zone feature
    As a staff
    I want to view chat zone page

    Scenario: Staff can view chat zone page
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        When the user select login button
        And the user should be login to the system
        And the user select chat zone menu
        Then the user validates chat zone page visibility

    Scenario: Staff can view group chat detail page
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        When the user select login button
        And the user should be login to the system
        And the user select chat zone menu
        And the user validates chat zone page visibility
        And the user select action icon on group chat row
        And the user validates group chat detail page visibility

    Scenario: Staff can view group chat summary page
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        When the user select login button
        And the user should be login to the system
        And the user select chat zone menu
        And the user validates chat zone page visibility
        And the user select action icon on group chat row
        And the user validates group chat detail page visibility
        And the user select info icon
        Then the chat summary should be visible

    Scenario: Staff can view individual chat page
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        When the user select login button
        And the user should be login to the system
        And the user select chat zone menu
        And the user validates chat zone page visibility
        And the user select individual chat button
        Then the user validates individual chat page visibility

    Scenario: Staff can view individual chat details page
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        When the user select login button
        And the user should be login to the system
        And the user select chat zone menu
        And the user validates chat zone page visibility
        And the user select individual chat button
        And the user click action icon on individual chat row
        Then the individual chat detail page should be visible

    Scenario: Staff can view individual chat summary page
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        When the user select login button
        And the user should be login to the system
        And the user select chat zone menu
        And the user validates chat zone page visibility
        And the user select individual chat button
        And the user click action icon on individual chat row
        And the user click info icon
        Then the chat summary should be visible

    Scenario: Staff can redirect to view by student page
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        When the user select login button
        And the user should be login to the system
        And the user select chat zone menu
        And the user validates chat zone page visibility
        And the user select view by student button
        Then the user validates view by student page visibility

    Scenario: Staff can redirect to view by student chat detail page
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        When the user select login button
        And the user should be login to the system
        And the user select chat zone menu
        And the user validates chat zone page visibility
        And the user select view by student button
        And the user select action icon on view by student row
        Then the view by student chat detail page should be visible

    Scenario: Staff can view chat summary of view by student chat page
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        When the user select login button
        And the user should be login to the system
        And the user select chat zone menu
        And the user validates chat zone page visibility
        And the user select view by student button
        And the user select action icon on view by student row
        And the user click info icon
        Then the chat summary should be visible