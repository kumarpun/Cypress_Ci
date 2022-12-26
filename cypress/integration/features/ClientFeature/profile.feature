Feature: Profile Feature
    As a user
    I want to go to profile Feature

    Scenario: User can go to profile page
        Given user has browsed to the login page
        And user "user1" has logged in using webUI
        And the user select avatar
        And the user select my profile option
        Then the profile page should be visible

    Scenario: User can add/change bio
        Given user has browsed to the login page
        And user "user1" has logged in using webUI
        And the user select avatar
        And the user select my profile option
        Then the profile page should be visible
        And the user type on bio field
        And the user select save changes button
        Then the bio should be saved

    Scenario: User can change name
        Given user has browsed to the login page
        And user "user1" has logged in using webUI
        And the user select avatar
        And the user select my profile option
        Then the profile page should be visible
        And the user type new name
        And the user select save changes button
        Then the name should be saved

    Scenario: User can change profile image
        Given user has browsed to the login page
        And user "user1" has logged in using webUI
        And the user select avatar
        And the user select my profile option
        Then the profile page should be visible
        And the user upload new image
        And the user select save changes button
        Then the image should be saved

    Scenario: User can change password
        Given user has browsed to the login page
        And user "user1" has logged in using webUI
        And the user select avatar
        And the user select my profile option
        Then the profile page should be visible
        And the user select change password tab
        And the user enter current password
        And the user enter new password
        And the user enter confirm password
        And the user select update password button
        Then the password should be changed