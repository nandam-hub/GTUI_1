@claimcenter @designatedfunction
Feature: Add Activity in Claim center
    As a user, I want to perform add activity transaction in claim center

    @add_activity_cc
    Scenario: Adding the activity
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "addActivity_01" from json "AddActivityTestData"
        And the user creates new FNOL
        And the user adds an activity
        Then the add activity is added successfully
