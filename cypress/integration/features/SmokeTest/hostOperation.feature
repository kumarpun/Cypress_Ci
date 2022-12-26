Feature: Host Operation
    As an admin
    I want to visit host operation page
    So that I can interact with host

    Scenario: User can visit host operation page
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select host operations option from the dropdown
        Then the table list should be display

    # Scenario: Admin can search host
    #     Given user has browsed to the admin login page
    #     And user "admin" has logged in using adminUI
    #     When the user select login button
    #     And the user select host operations option from the dropdown
    #     Then the table list should be display
    #     And the user search and select host
    #     And the user select search button
    #     Then the table list should be display

    Scenario: Admin can filter Suspended host
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select host operations option from the dropdown
        Then the table list should be display
        And the user select Suspended label
        And the user select search button
        Then the suspended host list should be display

    Scenario: Admin can view host category page
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select host operations option from the dropdown
        Then the table list should be display
        And the user select view host category label
        Then the table list should be display