@claimcenter @designatedfunction
 
Feature: Verify association in claim center
    As a user, I want to verify the association in claim center.
 
    @verifyassociation
    Scenario: Validate the association added in the claim center
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "createActivity_02" from json "FNOLTestData"
        And the user create new FNOL for USAPersonalAuto
        And the FNOL is added successfully
        And the user loads "cc" data "Association" from json "AssociationTestData"
        And the user added association 
        Then the successfully validated association