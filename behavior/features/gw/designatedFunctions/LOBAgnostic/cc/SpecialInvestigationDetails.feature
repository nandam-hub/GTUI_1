@claimcenter @designatedfunction
Feature: Verify SID
    As a user, I want to Verify specialinvestigationdetails
    @specialinvestigationdetails
    Scenario: Verify specialinvestigationdetails in claimcenter
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        When the user loads "cc" data "sIDetails_01" from json "SpecialInvestigationTestData"
        And the user search with claim number
        And the user navigates to SIU screen through lossdetails
        Then the user verify in the workplan screen