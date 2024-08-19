@billingcenter @designatedfunction
Feature: Change payment plan in billing center
    As a user, I want to change the payment plan in billing center

    @change_payment_plan
    Scenario: Changing the payment plan
        Given the user logs into the billing center as "superuser"
        And the user loads "bc" data "change_payment_plan" from json "ChangePaymentPlanTestData"
        When the user loads the policy with policy number
        And the user loads the change payment plan screen
        And the user changes the payment plan
        Then New payment plan is validated