@billingcenter @designatedfunction
Feature: Verifying payments in billing center
    As a user, I want to verify the payments in billing center

    @payment_details @payment_reversal
    Scenario: Verifying payment details and payment reversal in payment screen
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_02" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission from actions menu for homeowner policy
        Then the policy is issued
        When the user logs into the billing center as "superuser"
        And the user loads "bc" data "payments_01" from json "PaymentsTestData"
        And the user makes new payment
        And the user loads the payments screen
        Then payment details are updated successfully
        When the user performs payment reversal
        Then payment reversal is processed successfully