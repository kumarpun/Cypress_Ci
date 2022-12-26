Feature: Browse Courses
    As an admin
    I want to view list of courses

    Scenario: Admin can view list of courses
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select course menu
        Then the table list should be display

    Scenario: Admin can edit course title
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select course menu
        Then the table list should be display
        And the user select particular course
        And the user select edit title button
        And the user add new course title name
        When the user click save button
        Then the new course title should be saved

    # Scenario: Admin can add slugs
    #     Given user has browsed to the admin login page
    #     And user "admin" has logged in using adminUI
    #     When the user select login button
    #     And the user select course menu
    #     Then the table list should be display
    #     And the user select particular course
    #     And the user select slugs menu
    #     And the user enter slug name
    #     And the user click add button
    #     Then the slug should be added

    Scenario: Admin can add FAQ on course
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select course menu
        Then the table list should be display
        And the user select particular course
        And the user select FAQ tab
        And the user enter FAQ question and answer
        And the user submit FAQ
        Then the FAQ should be added

    Scenario: Admin can delete FAQ from the course
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select course menu
        Then the table list should be display
        And the user select particular course
        And the user select FAQ tab
        And the user seletc delete faq icon
        And the user confirm delete
        Then the faq get deleted

    Scenario: Admin can add pricing to the course
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select course menu
        Then the table list should be display
        And the user select particular course
        And the user select pricing tab
        And the user add pricing
        And the user tap save button
        Then the pricing added successfully