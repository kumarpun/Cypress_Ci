Feature: Home Feature
    As a user
    I want to visit home page

    Scenario: User can scroll to explore course button from home page
        Given user has browsed to the login page
        And user "user1" has logged in using webUI
        And the user scroll to explore course button in home page
        Then the button should be visible

    Scenario: User can visit course page using explore course button from home page
        Given user has browsed to the login page
        And user "user1" has logged in using webUI
        And the user scroll to explore course button in home page
        Then the button should be visible
        And the user select explore course button
        Then the course page should be visible

    Scenario: User can scroll to bottom of the home page
        Given user has browsed to the login page
        And user "user1" has logged in using webUI
        And the user scroll to bottom of the home page
        Then the footer get visible

    Scenario: Social and shared space content display as per tab selected
        Given user has browsed to the login page
        And user "user1" has logged in using webUI
        And the user scroll and select teach tab
        Then teach content get display

    Scenario: User can visit about us page
        Given user has browsed to the login page
        And user "user1" has logged in using webUI
        And the user select about us menu
        Then the about us page get display


# 1. Home
# 2. Profile
# 3. Social