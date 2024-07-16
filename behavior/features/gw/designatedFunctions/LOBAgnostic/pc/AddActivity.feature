@policycenter @designatedfunction

Feature: Add activity in policy center
    As a user, I want to perform add activity transaction in policy center

    @add_activity_pc
    Scenario: Adding the activity from the account level
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "addActivity_01" from json "AddActivityTestData"
        And the user creates personal account
        And the user performs add activity transaction
        Then the activity is added successfully