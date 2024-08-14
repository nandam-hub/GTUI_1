@claimcenter @designatedfunction
Feature: Create recovery reserve in Claim center
    As a user, I want to create recovery reserve

    @recovery_reserve
    Scenario: Create recovery reserve from actions tab
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "addActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        When the user loads "cc" data "recoveryReserve_01" from json "RecoveryReserveTestData"
        And the user creates recovery reserve
        Then the recovery reserve is created successfully