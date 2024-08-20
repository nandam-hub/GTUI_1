@billingcenter @designatedfunction
Feature: disbursment status
    As a user, I want to verify disbursmant status in billing center

    @disbursment_status
    Scenario: Verifying disbursment status
        Given the user logs into the billing center as "superuser"
        When the user loads "bc" data "disbursment_Status" from json "DisbursmentstatusTestData"
        And the user navigate to account screen from account tab
        And the user creates a disbursement
        Then the disbursement created successfully

    @Commissionstatement
    Scenario: Verifying disbursment status
        Given the user logs into the billing center as "superuser"
        When the user loads "bc" data "commissionStatement" from json "DisbursmentstatusTestData"
        And the user loads the policy with policy number
        And the user navigates to producer tab
        Then the commision statement is displayed