
@policycenter @designatedfunction

Feature: Reinstate policy in policy center
    As a user, I want to perform reinstate transaction on cancelled Policy

    @reinstate_policy
    Scenario: Reinstate transaction on canceled policy from actions menu
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user creates commercial policy
        And the user loads "pc" data "cancelPolicy_01" from json "CancelPolicyTestData"
        And the user performs cancel policy transaction
        And the policy is canceled successfully
        And the user loads "pc" data "reinstatePolicy_01" from json "ReinstatePolicyTestData"
        And the user perform reinstate policy transaction
        Then the sucessfully reinstate policy transaction
