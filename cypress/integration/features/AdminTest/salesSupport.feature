Feature: Sales Support
    As an admin
    I want to go to sales support page
    So that I can interact with abandoned cart list

    Scenario: User can view abandoned cart list
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select sales support option from the dropdown
        Then the table list should be display

    Scenario: User can create USD discount coupon
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select sales support option from the dropdown
        Then the table list should be display
        And the user select create discount coupon link
        And the user select expire date
        And the user enter usd discount amount
        And the user enter label
        And the user generate code
        And the user enter total redemptions
        And the user select save button
        Then the coupon should be created

    Scenario: User can view coupon list
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select sales support option from the dropdown
        Then the table list should be display
        And the user select coupon list link
        Then the coupon list should be visible

    Scenario: User can view coupon Information
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select sales support option from the dropdown
        Then the table list should be display
        And the user select coupon list link
        Then the coupon list should be visible
        And the user select coupon data
        Then the coupon information should be visible

    Scenario: User can filter coupon
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select sales support option from the dropdown
        Then the table list should be display
        And the user select coupon list link
        Then the coupon list should be visible
        And the user enter data on label field
        And the user select search button
        Then the table list should be display

    Scenario: User can create INR discount coupon
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select sales support option from the dropdown
        Then the table list should be display
        And the user select create discount coupon link
        And the user select expire date
        And the user enter INR discount amount
        And the user enter label
        And the user generate code
        And the user enter total redemptions
        And the user select save button
        Then the coupon should be created