@claimcenter @designatedfunction
Feature: Capturing first notice of loss
    As a user, I want to create a new fnol in claim center

    @fnol
    Scenario: Creating a new fnol with commercial policy
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        When the user creates new FNOL
        Then the FNOL is added successfully

    @add_rental_service
    Scenario: To add rental service for an auto claim
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_04" from json "FNOLTestData"
        When the user creates new claim with rental
        Then claim is created with rental service

    @catastrophe
    Scenario: Creating a new fnol with auto policy for catastrophe
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_03" from json "FNOLTestData"
        When the user create new FNOL for USAPersonalAuto
        Then the FNOL is added successfully
        And the catastrophe is displayed in loss details

    @claim_history
    Scenario: Verify that key activities on the claim is updated in history screen
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        When the user creates new FNOL
        Then the FNOL is added successfully
        And the activities on the claim is updated in claim history screen

    @close_claim
    Scenario: To close a claim by closing all the items associated within the claim (exposure, activities, litigation)
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "addLitigation_01" from json "LitigationTestData"
        And the user creates new FNOL
        And the user adds new litigation
        And the user loads "cc" data "addActivity_01" from json "AddActivityTestData"
        And the user adds an activity
        And the user loads "cc" data "Exposure_02" from json "ExposuresTestData"
        And the user creates property exposure
        And the user loads "cc" data "createActivity_05" from json "FNOLTestData"
        When the user closes the exposure
        And the user completes all workplan activities
        And the user closes the litigation matter
        And the user closes the claim
        Then claim is closed successfully
