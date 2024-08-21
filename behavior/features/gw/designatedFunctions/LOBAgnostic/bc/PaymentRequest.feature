@billingcenter @designatedfunction
Feature: Create Payment request
    As a user, I want to create payment request for EFT policies

    @payment_request
    Scenario: Create Payment request for EFT policies
        Given the user logs into the billing center as "superuser"
        When the user loads "bc" data "paymentRequest_01" from json "PaymentRequestTestData"
        And the user search with the account number
        And the user creates a payment request for EFT policy
        Then the payment request is added successfully