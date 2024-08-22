@claimcenter @designatedfunction
Feature: Add Litigation in Claim center
    As a user, I want to add litigation in claim center

    @add_litigation_cc
    Scenario: Adding the litigation
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "addLitigation_01" from json "AddLitigationTestData"
        And the user opens an existing claim
        And the user adds new litigation
        Then the litigation is added successfully