@policycenter @designatedfunction @newsubmission
Feature: Homeowner new submission
    As a user, I want to perform create new submission(quote, bind and issue)

    Background: Login as superuser
        Given the user logs into the policy center as "superuser"

    @bind_submission
    Scenario: Creating homeowners bind
        Given the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user quote the new submission for homeowners
        And the user bind the new submission
        Then the policy is bound successfully

    @quote_submission
    Scenario: Creating homeowners quote
        Given the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user quote the new submission for homeowners
        Then the quote is saved successfully

    @issue_submission
    Scenario: Issuing homeowner policy from actions menu
        Given the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user issue the new submission from actions menu for homeowner policy
        Then the policy is issued

    @error_messages_validation
    Scenario: Verifying UI Error messages on Homeowners policy
        Given the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user initiate homeowner quote
        Then the user validates error messages for Refusal Type dropdown in GWHomeownersLine screen
        And the user validates error messages without selecting any coverage in Homeowners policy

    @validate_coverage_forms
    Scenario: Verify forms by adding specific coverages from Homeowners LOB
        Given the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user adds specific coverges to homeowner policy
        Then the forms are added successfully