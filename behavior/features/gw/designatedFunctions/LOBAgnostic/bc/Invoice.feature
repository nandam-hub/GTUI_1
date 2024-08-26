@billingcenter @designatedfunction
Feature: Invoice in billing center
    As a user, I want to update invoices in billing center

    @invoice_due
    Scenario: Updating billed date for an invoice due
        Given the user logs into the billing center as "superuser"
        When the user loads "bc" data "invoiceDue_01" from json "BillingTestData"
        And the user navigates to invoices on billing center home page
        And the user changes the invoice billed date
        Then the invoice billed date is updated

    @invoice_billed
    Scenario: Resend invoice for a billed invoice
        Given the user logs into the billing center as "superuser"
        When the user loads "bc" data "invoiceBilled_01" from json "BillingTestData"
        And the user navigates to invoices on billing center home page
        And the user resends invoice
        Then the invoice resent confirmation message is displayed

    @searchInvoices_PaymentPlan
    Scenario:  Validate the created invoices as per the selected Payment plan
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user issue the new submission from actions menu for personal auto with "1" vehicles
        When the user logs into the billing center as "superuser"
        And the user loads "bc" data "changePaymentPlan_01" from json "ChangePaymentPlanTestData"
        And the user loads the policy with policy number
        And the user loads the change payment plan screen
        And the user changes the payment plan
        Then the invoice details are validated as per the payplan successfully