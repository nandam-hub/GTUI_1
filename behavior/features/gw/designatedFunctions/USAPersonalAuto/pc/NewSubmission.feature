@policycenter @designatedfunction @newsubmission

Feature: Personal auto new submission
    As a user, I want to perform create new submission(quote, bind and issue)

    @quote_submission_pa
    Scenario: Creating personal auto quote
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user quote the new submission for personal auto
        Then the quote is saved successfully

    @bind_submission_pa
    Scenario: Creating personal auto bind
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user quote the new submission for personal auto
        And the user bind the new submission
        Then the policy is bound successfully

    @issue_submission_pa
    Scenario: Issuing personal auto from actions menu
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission from actions menu for personal auto with "1" vehicles
        Then the policy is issued

    @multiple_vehicles
    Scenario: Adding Multiple Vehicles
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_06" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission for personal auto with "3" vehicles
        Then the policy is issued

    @multiple_drivers
    Scenario: Adding Multiple Drivers
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_08" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission for personal auto with "2" drivers
        Then the policy is issued
        And drivers are added successfully