@claimcenter @designatedfunction
Feature: Create checks
    As a user, I want to create check in claim center

    @create_check
    Scenario: Creating check from actions menu for commercial policy
       Given the user logs into the claims center as "adjuster"
        And the user loads "cc" data "createActivity_01" from json "FNOLTestData"
        And the user creates new FNOL
        And the user loads "cc" data "contact_01" from json "ContactTestData"
        And the user update the contact details
        And the user loads "cc" data "createCheck_01" from json "CreateCheck"
        When the user creates the check
        Then the check details are updated successfully