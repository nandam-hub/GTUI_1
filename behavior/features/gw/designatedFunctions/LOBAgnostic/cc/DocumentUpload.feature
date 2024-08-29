@claimcenter @designatedfunction
Feature: user upload document
    As a user, I want to upload document

    @Document_upload
    Scenario: user want to upload document in cc
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        And the user search with claim number
        And the user upload the document
        Then the user validate the uploaded document