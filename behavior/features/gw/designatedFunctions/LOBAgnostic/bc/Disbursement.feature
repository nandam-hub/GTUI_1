@billingcenter @designatedfunction
Feature: Disbursment status
    As a user, I want to manage Disbursements in billing center

    @disbursement_status
    Scenario: Verify disbursement is created
        Given the user logs into the billing center as "superuser"
        When the user loads "bc" data "disbursmentStatus" from json "DisbursementTestData"
        And the user navigate to account screen from account tab
        And the user creates a disbursement
        Then the disbursement created successfully