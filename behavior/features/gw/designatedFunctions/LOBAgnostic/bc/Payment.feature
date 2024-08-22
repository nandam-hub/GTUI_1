@billingcenter @designatedfunction
Feature: Payment in billing center
    As a user, I want to manage the payment in billing center

    @change_payment_plan
    Scenario: Changing the payment plan
        Given the user logs into the policy center as "superuser"
        Given the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission from actions menu for personal auto with "1" vehicles
        When the user logs into the billing center as "superuser"
        And the user loads "bc" data "changePaymentPlan_01" from json "ChangePaymentPlanTestData"
        And the user loads the policy with policy number
        And the user loads the change payment plan screen
        And the user changes the payment plan
        Then the payment plan is updated successfully

    @payment_request
    Scenario: Create Payment request for EFT policies
        #Given the user logs into the policy center as "superuser"
        #When the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        #And the user creates commercial account
        #And the user creates commercial policy
        Given the user logs into the billing center as "superuser"
        When the user loads "bc" data "paymentRequest_01" from json "PaymentRequestTestData"
        And the user search with the account number
        And the user creates a payment request for EFT policy
        Then the payment request is added successfully