@billingcenter @designatedfunction
Feature: Override distribution 
    As a user, I want to override disribution while making payment

    @override_distribution
    Scenario: Override distribution in new direct bill payment
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission from actions menu for homeowner policy
        And the policy is issued
        And the user logs into the billing center as "superuser"
        And the user loads "bc" data "overrideDistribution_01" from json "OverrideDistributionTestData"
        And the user search with the account number
        And the user makes payment in new direct bill payment from action tab
        Then the override distribution is applied successfully
