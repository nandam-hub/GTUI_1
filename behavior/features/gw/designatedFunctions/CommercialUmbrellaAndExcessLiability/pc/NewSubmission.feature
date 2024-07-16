@policycenter @designatedfunction

Feature: Commercial umbrella and excess liability new submission
    As a user, I want to perform create new submission(quote, bind and issue)

    @bind_submission_co
    Scenario: Creating commercial umbrella and excess liability bind
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_03" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user quote the new submission for umbrella liability
        And the user bind the new submission
        Then the policy is bound successfully

    @quote_submission_co
    Scenario: Creating commercial umbrella and excess liability quote
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_03" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user quote the new submission for umbrella liability
        Then the quote is saved successfully

    @issue_submission_co
    Scenario: Issuing commercial umbrella and excess liability policy
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_03" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user issue the new submission for umbrella liability
        Then the policy is issued
