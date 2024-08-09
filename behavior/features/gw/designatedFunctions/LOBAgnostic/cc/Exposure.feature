@claimcenter @designatedfunction
Feature: Creating exposure in Claim center
    As a user, I want to create exposure in claim center

    @bi_liability_exposure
    Scenario: Creating BI Liability exposure
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createActivity_02" from json "FNOLTestData"
        And the user create new FNOL for USAPersonalAuto
        Then the FNOL is added successfully
        When the user loads "cc" data "BI_Liability_Exposure" from json "ExposuresTestData"
        And the user creates BI Liability exposure
        Then the user validates BI Liability exposure

    @medical_payments_exposure
    Scenario: Creating medical payments exposure
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createActivity_02" from json "FNOLTestData"
        And the user create new FNOL for USAPersonalAuto
        Then the FNOL is added successfully
        When the user loads "cc" data "Medical_Payments_Exposure" from json "ExposuresTestData"
        And the user creates medical payments exposure
        Then the user validates medical payments exposure