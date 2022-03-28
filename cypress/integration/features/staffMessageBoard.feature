Feature: Staff message board
    As a Staff
    I want to go to message board page
    So that I can interact with student post

    Scenario: Staff can go to message board page
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        And the user select login button
        And the user should be login to the system
        And the user select message board menu
        And the user select class from dropdown
        When the user select set class button
        Then the user validates message board page

    Scenario: Staff can post text in message board
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        And the user select login button
        And the user should be login to the system
        And the user select message board menu
        And the user select class from dropdown
        And the user select set class button
        And the user validates message board page
        And the user enter text in text area
        When the user select post button
        Then the entered post should be posted

    Scenario: Staff can post banner in message board
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        And the user select login button
        And the user should be login to the system
        And the user select message board menu
        And the user select class from dropdown
        And the user select set class button
        And the user validates message board page
        And the user select banner tab
        And the user select arrow icon
        And the user select particular banner
        When the user select post button
        Then the banner post should be posted

    Scenario: Staff can post feeling in message board
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        And the user select login button
        And the user should be login to the system
        And the user select message board menu
        And the user select class from dropdown
        And the user select set class button
        And the user validates message board page
        And the user select feeling
        When the user select post button
        Then the feeling post should be posted
    
     Scenario: Staff can post tag in message board
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        And the user select login button
        And the user should be login to the system
        And the user select message board menu
        And the user select class from dropdown
        And the user select set class button
        And the user validates message board page
        And the user select tag tab
        And the user search student name
        And the user click student to tag
        When the user select post button
        Then the tag post should be posted

@focus
    Scenario: Staff can post gif
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        And the user select login button
        And the user should be login to the system
        And the user select message board menu
        And the user select class from dropdown
        And the user select set class button
        And the user validates message board page
        And the user select gif tab
        And the user enter gif name
        And the user select searched gif
        When the user select post button
        Then the gif post should be posted

    Scenario: Staff can upload and post photo
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

    Scenario: Staff can post combination of text, feeling, tag and banner
        Given user has browsed to the login page
        And user "Principal" has logged in to the system
        And the user select login button
        And the user should be login to the system
        And the user select message board menu
        And the user select class from dropdown
        And the user select set class button
        And the user validates message board page
        And the user select feeling
        And the user select tag tab
        And the user search student name
        And the user click student to tag
        And the user select banner tab
        And the user select arrow icon
        And the user select particular banner
        And the user enter text in text area
        When the user select post button
        Then the entered post should be posted