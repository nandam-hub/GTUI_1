@policycenter @designatedfunction
Feature: Processing a renewal
    As a user, I want to perform renewal transaction in policy center

    @renewal_cp
    Scenario: Perform renewal on commercial policy
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user creates commercial policy
        When the user loads "pc" data "renewal_01" from json "RenewalTestData"
        And the user performs renewal on commercial policy
        Then the renewal is applied successfully