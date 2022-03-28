Feature: Staff comment on Message board
    As a Staff
    I want to comment on post

    Scenario: Staff can post in message board so that they can comment on it
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        And the user select login button
        And the user should be login to the system
        And the user select message board menu
        And the user select class from dropdown
        And the user select set class button
        And the user validates message board page
        And the user select photo tab
        And the user upload photo
        When the user select post button
        Then the image post should be posted

    Scenario: Staff can comment text on post
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        And the user select login button
        And the user should be login to the system
        And the user select message board menu
        And the user select class from dropdown
        And the user select set class button
        And the user validates message board page
        And the user select comment icon
        When the user enter text on comment
        Then the text comment should be posted

    Scenario: Staff can comment emoji on post
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        And the user select login button
        And the user should be login to the system
        And the user select message board menu
        And the user select class from dropdown
        And the user select set class button
        And the user validates message board page
        And the user select emoji icon
        When the user click emoji
        Then the emoji should be commented

    Scenario: Staff can comment image on post
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        And the user select login button
        And the user should be login to the system
        And the user select message board menu
        And the user select class from dropdown
        And the user select set class button
        And the user validates message board page
        And the user select image icon
        And the user upload photo
        When the user click post button to comment
        Then the image should be commented