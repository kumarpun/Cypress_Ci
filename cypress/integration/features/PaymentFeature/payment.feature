Feature: Enroll Course Feature
    As a user
    I want to purchase course using payment card

    Scenario: User can enroll on course
        Given user has browsed to the login page
        And user "user1" has logged in using webUI
        When user selects the courses link
        And the user enters the course "Course for purchase using automation"
        # And the user select search icon
        And the user select searched course
        # And the user select book a trial button
        # And the user input date
        # And the user click book a trial button
        And the user select enroll now button
        And the user select goto payment button
        And the user select pay with card
        And the user enters card details
        And the user submit payment
        Then the course should be purchased

    Scenario: Payment for not logged in user case
        Given user has browsed to the Enthuziastic website
        When user selects the courses link
        And the user enters the course "Course for purchase using automation"
        And the user select searched course
        And the user select enroll now button
        And user "user1" login from pop up
        And the user select enroll now button
        And the user select goto payment button
        And the user select pay with card
        And the user enters card details
        And the user submit payment
        Then the course should be purchased