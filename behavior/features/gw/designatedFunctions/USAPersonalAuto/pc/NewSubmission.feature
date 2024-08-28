@policycenter @designatedfunction @newsubmission

Feature: Personal auto new submission
    As a user, I want to perform create new submission(quote, bind and issue)

    Background: Login as superuser
        Given the user logs into the policy center as "superuser"

    @quote_submission
    Scenario: Creating personal auto quote
        Given the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user quote the new submission for personal auto
        Then the quote is saved successfully

    @bind_submission
    Scenario: Creating personal auto bind
        Given the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user quote the new submission for personal auto
        And the user bind the new submission
        Then the policy is bound successfully

    @issue_submission
    Scenario: Issuing personal auto from actions menu
        Given the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user issue the new submission from actions menu for personal auto with "1" vehicles
        Then the policy is issued

    @multiple_vehicles
    Scenario: Adding Multiple Vehicles
        Given the user loads "pc" data "newSubmission_06" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user issue the new submission for personal auto with "3" vehicles
        Then the policy is issued

    @multiple_drivers
    Scenario: Adding Multiple Drivers
        Given the user loads "pc" data "newSubmission_08" from json "NewSubmissionTestData"
        When the user creates personal account
        And the user issue the new submission for personal auto with "2" drivers
        Then the policy is issued
        And "2" drivers are added successfully