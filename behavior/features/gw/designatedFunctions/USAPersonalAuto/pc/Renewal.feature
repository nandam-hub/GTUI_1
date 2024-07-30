@policycenter @designatedfunction
Feature: Processing a renewal on USAPersonalAuto policy
    As a user, I want to process renewal on usa personal auto policy

    @renewal_pa
    Scenario: Perform renewal on usa personal auto policy
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission for personal auto with with "1" vehicles
        When the user loads "pc" data "renewal_05" from json "RenewalTestData"
        And the user performs renewal on USAPersonalAuto policy
        Then the renewal is applied successfully