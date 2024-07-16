@claimcenter @designatedfunction
Feature: Adding note in claim center
    As a user, I want to add note in claim center

    @add_note_cc
    Scenario: Adding notes in a claim center
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createClaim_01" from json "AddNoteTestData"
        And the user creates new FNOL
        And the user creates the note
        Then the note is added successfully to claim