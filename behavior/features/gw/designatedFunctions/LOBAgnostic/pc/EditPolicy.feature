@policycenter @designatedfunction
 
Feature: Edit policy in policy center
    As a user, I want to perform edit policy transaction in policy center
 
    @editpolicy
    Scenario: Initiates edit policy transaction after quote the policy
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user quote the new submission for commercial property
        And the user perform the edit policy transaction of GoCommercialPropertyLine
        Then the policy is successfully edited in GoCommercialPropertyLine