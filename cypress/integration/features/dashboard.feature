Feature: Dashboard page
    As a staff
    I want to go to dashboard page
    So that I can view dashboard data

    Scenario: User can go to dashboard page
       Given user has browsed to the login page
       And user "Principal" has logged in to the system
       And the user select login button
       And the user should be login to the system
       Then the dashboard data should be display

    Scenario: Principal can award DiGiiTs to students
       Given user has browsed to the login page
       And user "Principal" has logged in to the system
       And the user select login button
       And the user should be login to the system
       And the user select award DiGiiTs button
       And the user select student
       And the user select digiits
       And the user enter reason
       When the user select award button
       Then the digiit should be awarded successfully

    Scenario: Principal can award Merit certificate to students
       Given user has browsed to the login page
       And user "Principal" has logged in to the system
       And the user select login button
       And the user should be login to the system
       And the user select award merit certificate button
       And the user select student
       And the user select merit certificate silvers
       When the user select award button
       Then the certificate should be awarded successfully