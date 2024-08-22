@policycenter @designatedfunction

Feature: Validate forms
    As a user, I want to add coverages and validate forms

    @validate_Forms
    Scenario: Verify forms by adding specific coverages from Homeowners LOB
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user adds specific coverges to homeowner policy
        Then the forms are added successfully