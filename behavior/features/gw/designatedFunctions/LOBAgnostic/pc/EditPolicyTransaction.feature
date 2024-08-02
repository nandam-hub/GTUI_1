@policycenter @designatedfunction
 
Feature: Edit policy transaction in policy center
    As a user, I want to perform edit policy transaction in policy center
 
    @editpolicy
    Scenario: Update coverage through edit policy transaction after quote
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user quote the new submission for commercial property
        And the user loads "pc" data "editPolicy_01" from json "EditPolicyTransactionTestData"
        And the user updates GoCommercialPropertyLine coverage through edit policy transaction
        Then the coverage is successfully updated for commercial property policy