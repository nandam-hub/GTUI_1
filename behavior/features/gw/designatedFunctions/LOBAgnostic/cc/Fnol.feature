@claimcenter @designatedfunction
Feature: Capturing first notice of loss
    As a user, I want to create a new fnol in claim center

    @fnol
    Scenario: Creating a new fnol with commercial policy
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        Then the FNOL is added successfully

    @catastrophe
    Scenario: Creating a new fnol with auto policy for catastrophe
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createActivity_03" from json "FNOLTestData"
        And the user create new FNOL for USAPersonalAuto
        Then the FNOL is added successfully
        And the catastrophe is displayed in loss details

    @claimhistory
    Scenario: Verify that key activities on the claim is updated in history screen
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        Then the FNOL is added successfully
        And the activities on the claim is updated in claim history screen