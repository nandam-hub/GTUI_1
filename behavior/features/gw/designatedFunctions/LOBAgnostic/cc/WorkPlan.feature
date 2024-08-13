@claimcenter @designatedfunction
Feature: View Claim Summary
    As a user, I want add or update work plan

    @workplan
    Scenario: Complete the work plan for activity and interactions associated with it
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        When the user loads "cc" data "workPlan_01" from json "WorkPlanTestData"
        And the user search with claim number
        And the user completes the activity work plan
        Then the activity work plan status is completed