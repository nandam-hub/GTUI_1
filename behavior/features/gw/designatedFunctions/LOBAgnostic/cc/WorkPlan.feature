@claimcenter @designatedfunction
Feature: View Claim Summary
    As a user, I want to click on complete buttton in the claim of work plan

    @workplan
    Scenario: Click on complete buttton for the activity and interactions associated with in the claim of work plan
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        When the user loads "cc" data "workPlan_01" from json "WorkPlanTestData"
        And the user search with claim number
        And the user click on complete in work plan screen
        Then the status should be complete