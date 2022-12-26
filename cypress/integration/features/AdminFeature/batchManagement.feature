Feature: Batch Management
    As an admin
    I want to visit batch management page

    Scenario: Admin can visit batch management page
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select Batch Management link
        Then the table list should be display

    Scenario: Admin can search course on batch management list
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select Batch Management link
        Then the table list should be display
        And the user search course "test chime"
        Then the table list should be display

    Scenario: Admin can view users list on batch
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select Batch Management link
        Then the table list should be display
        And the user search course "test chime"
        Then the table list should be display
        And the user select batch row
        Then the users list display

    Scenario: Admin can add user in batch with participant role
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select Batch Management link
        Then the table list should be display
        And the user search course "test chime"
        Then the table list should be display
        And the user select batch row
        Then the users list display
        And the admin select add user button
        And the admin search and select user
        And the user select add button
        Then the user added successfully

    Scenario: Admin can delete user from batch
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select Batch Management link
        Then the table list should be display
        And the user search course "test chime"
        Then the table list should be display
        And the user select batch row
        Then the users list display
        And the user select delete button
        And the user select remove user button
        Then the user get removed successfully

    Scenario: Admin can view users list on batch
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select Batch Management link
        Then the table list should be display
        And the user search course "test chime"
        Then the table list should be display
        And the user select batch row
        And the user select general tab
        And the user select update button
        And the user enter course name
        When the user click on save button
        Then the course name should be updated

    Scenario: Admin can update batch name
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select Batch Management link
        Then the table list should be display
        And the user search course "test chime"
        Then the table list should be display
        And the user select batch row
        And the user select general tab
        And the user select update batch button
        And the user enter new batch name
        And the user select update batch button
        Then the batch name get updated

    Scenario: Admin can view feedback list on batch session
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select Batch Management link
        Then the table list should be display
        And the user search course "test chime"
        Then the table list should be display
        And the user select batch row
        And the user select feedback menu
        Then the feedback list should be display

    # Scenario: Session get expanded by default if it has feedback
    #     Given user has browsed to the admin login page
    #     And user "admin" has logged in using adminUI
    #     When the user select login button
    #     And the user select Batch Management link
    #     Then the table list should be display
    #     And the user search course "test chime"
    #     Then the table list should be display
    #     And the user select batch row
    #     And the user select feedback menu
    #     Then the expanded feedback should be display
    Scenario: Admin can see summary on session
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select Batch Management link
        Then the table list should be display
        And the user search course "test chime"
        Then the table list should be display
        And the user select batch row
        And the user select summary menu
        Then the summary get display

    Scenario: Admin can see recording on session
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select Batch Management link
        Then the table list should be display
        And the user search course "test chime"
        Then the table list should be display
        And the user select batch row
        And the user select recording menu
        Then the recording get display

    Scenario: Admin can view testimonial added
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select Batch Management link
        Then the table list should be display
        And the user search course "test chime"
        Then the table list should be display
        And the user select batch row
        And the user select testimonial menu
        Then the testimonail get display

   Scenario: Admin can add new session on batch
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select Batch Management link
        Then the table list should be display
        And the user search course "test meeting 9 DEC part 1"
        Then the table list should be display
        And the user select batch row
        And the user select session menu
        And the user select add new session button
        And the user select date
        And the user click add button
        # Then the session get added