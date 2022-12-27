Feature: Create Course from admin user
    As an admin
    I want to create course

    Scenario: Admin can visit course page
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        And the user select login button
        And the user select course menu
        Then the table list should be display
        
    Scenario: Admin can add new course
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        And the user select login button
        And the user select course menu
        Then the table list should be display
        And the user select add course button
        And the user search and select grade one category
        And the user input course name
        And the user select age group
        And the user select topic
        When the user select save button
        Then the course should be successfully created

    Scenario: Admin can search course
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        And the user select login button
        And the user select course menu
        Then the table list should be display
        And the user search course
        And the user select search button
        Then the course should be display