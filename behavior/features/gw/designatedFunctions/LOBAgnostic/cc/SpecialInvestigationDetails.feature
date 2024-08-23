@claimcenter @designatedfunction
Feature: Verify special investigation details
    As a user, I want to Verify special investigation details
    @special_investigation_details
    Scenario: Verify specialinvestigationdetails in claimcenter
        Given the user logs into the claims center as "superuser"
        And the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        When the user loads "cc" data "sIDetails_01" from json "SpecialInvestigationDetailsTestData"
        And the user updates special investigation details
        Then special investigation details is updated successfully in workplan