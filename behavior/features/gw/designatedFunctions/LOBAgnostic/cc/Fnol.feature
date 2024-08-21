@claimcenter @designatedfunction
Feature: Capturing first notice of loss
    As a user, I want to create a new fnol in claim center

    @fnol
    Scenario: Creating a new fnol with commercial policy
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        Then the FNOL is added successfully

    @add_rental_service
    Scenario: To add rental service for an auto claim
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createActivity_04" from json "FNOLTestData"
        And the user creates new claim with rental
        Then claim is created with rental service
