@claimcenter @designatedfunction
Feature: View Claim Summary
    As a user, I want to view claim summary page

    @view_claim_summary @search_claim
    Scenario: Viewing the summary of an claim
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        And the user search with claim number
        Then the claim summary details are loaded