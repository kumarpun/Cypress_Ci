Feature: Student Profile

    Scenario: Student can visit own profile page
        Given user has browsed to the student login page
        And user "Kumar" has logged in to the class system
        When the user select own avatar image
        Then the user should redirected to profile page