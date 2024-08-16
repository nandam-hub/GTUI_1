@billingcenter @designatedfunction
Feature: Commissions in billing center
    As a user, I want to verify Commissions in billing center

    @commission_rate
    Scenario: Verifying commission rate
        Given the user logs into the billing center as "superuser"
        And the user loads "bc" data "commission_rate" from json "CommissionsTestData"
        When the user loads the policy with policy number
        And the user loads the commissions screen
        Then commission rate is validated