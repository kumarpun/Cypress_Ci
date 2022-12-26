Feature: Create Topic
    As an admin
    I want to create different Topic
    So that people can participate

    Scenario: Admin can create topic
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        And the user select login button
        And the user select create topic menu
        And the user search and select grade one category
        And the user select plus icon to create topic
        And ther user enter topic title that need to be added
        And the user select level
        And ther user enter topic duration
        And the user enter topic description
        When the user select add topic button
        Then the new topic added should be visible

    Scenario: Admin can view topic detail
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        And the user select login button
        And the user select create topic menu
        And the user search and select grade one category
        When the user select info icon
        Then the topic details should be display

    Scenario: Admin can update topic detail
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        And the user select login button
        And the user select create topic menu
        And the user search and select grade one category
        And the user select editing locked button
        And the user select info icon
        And the user update topic description
        And the user update topic duration "40"
        When the user select update topic button
        Then the new topic added should be visible

    Scenario: Admin can search topic
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        And the user select login button
        And the user select create topic menu
        And the user search and select grade one category
        And the user search topic
        When the user select searched topic
        Then the searched topic result should be visible

    Scenario: Admin can delete topic
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        And the user select login button
        And the user select create topic menu
        And the user search and select grade one category
        And the user select delete icon from any one topic
        And the user enter topic name to delete
        When the user select delete topic button
        Then the selected topic should be deleted