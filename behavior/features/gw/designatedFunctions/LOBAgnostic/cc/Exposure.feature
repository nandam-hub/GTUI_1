@claimcenter @designatedfunction
Feature: Add or Update Exposure
    As a user, I want to add or update exposure in claim center

    @bi_liability_exposure @medical_payments_exposure @select_exposure
    Scenario: Creating and selecting the BI Liability and Medical Payment exposure's
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createActivity_02" from json "FNOLTestData"
        And the user create new FNOL for USAPersonalAuto
        When the user loads "cc" data "Exposure_01" from json "ExposuresTestData"
        And the user creates BI Liability exposure
        And the user creates medical payments exposure
        Then the user validates BI Liability exposure
        And the user validates medical payments exposure
        And the user selects and validates the BI liability and Medical Payment exposure's