Feature: User Management
    As an admin
    I want to view user management page

    Scenario: Admin can view user management page
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select user managment option from dropdown
        Then the user management data should be visible

@focus
    Scenario: Admin can visit individual user profile
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select user managment option from dropdown
        And the admin search user
        And the admin select searched user
        And the admin validates user profile visibility

    Scenario: Admin can assign course operation module to the user with viewer role
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select user managment option from dropdown
        And the admin search user
        And the admin select searched user
        And the admin validates user profile visibility
        And the admin select add module access button
        And the admin select add button
        Then the course operation with viewer role should be added

    Scenario: Admin can delete course operation module assigned to the user
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select user managment option from dropdown
        And the admin search user
        And the admin select searched user
        And the admin validates user profile visibility
        And the user select course operation delete icon
        Then the module added should be deleted

    Scenario: Admin can assign customer support module to the user with admin role
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select user managment option from dropdown
        And the admin search user
        And the admin select searched user
        And the admin validates user profile visibility
        And the admin select add module access button
        And the admin select customer support module
        And the admin select admin role
        And the admin select add button
        Then the customer support with admin role should be added

    Scenario: Admin can delete customer support module assigned to the user
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select user managment option from dropdown
        And the admin search user
        And the admin select searched user
        And the admin validates user profile visibility
        And the user select course operation delete icon
        Then the module added should be deleted

    Scenario: Admin can assign sales operation module to the user with admin role
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select user managment option from dropdown
        And the admin search user
        And the admin select searched user
        And the admin validates user profile visibility
        And the admin select add module access button
        And the admin select sales operation module
        And the admin select admin role
        And the admin select add button
        Then the sales operation with admin role should be added

    Scenario: Admin can delete sales operation module assigned to the user
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select user managment option from dropdown
        And the admin search user
        And the admin select searched user
        And the admin validates user profile visibility
        And the user select course operation delete icon
        Then the module added should be deleted

    Scenario: Admin can assign sales support module to the user with viewer role
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select user managment option from dropdown
        And the admin search user
        And the admin select searched user
        And the admin validates user profile visibility
        And the admin select add module access button
        And the admin select sales support module
        And the admin select add button
        Then the sales support with viewer role should be added

    Scenario: Admin can delete sales support module assigned to the user
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select user managment option from dropdown
        And the admin search user
        And the admin select searched user
        And the admin validates user profile visibility
        And the user select course operation delete icon
        Then the module added should be deleted

    Scenario: Admin can assign user management module to the user with admin role
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select user managment option from dropdown
        And the admin search user
        And the admin select searched user
        And the admin validates user profile visibility
        And the admin select add module access button
        And the admin select user management module
        And the admin select admin role
        And the admin select add button
        Then the user management with admin role should be added

    Scenario: Admin can delete user management module assigned to the user
        Given user has browsed to the admin login page
        And user "admin" has logged in using adminUI
        When the user select login button
        And the user select user managment option from dropdown
        And the admin search user
        And the admin select searched user
        And the admin validates user profile visibility
        And the user select course operation delete icon
        Then the module added should be deleted