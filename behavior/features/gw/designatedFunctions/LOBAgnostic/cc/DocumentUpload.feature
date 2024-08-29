@claimcenter @designatedfunction
Feature: User Document Upload
    As a user, I want to upload document

    @document_upload
    Scenario: user want to upload document in cc
        Given the user logs into the claims center as "superuser"
        And  the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        And  the user loads "cc" data "documentUpload_01" from json "DocumentUploadTestData"
        When the user upload the document
        Then the user validate the uploaded document