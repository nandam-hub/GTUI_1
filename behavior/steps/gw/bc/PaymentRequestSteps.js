const { When, Then } = require("@cucumber/cucumber");
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario"
import { PaymentRequestScenario } from "../../../../ui/actions/gw/bc/PaymentRequestScenario";

const navigationScenario = new NavigationScenario();
const paymentRequestScenario = new PaymentRequestScenario()

When(/^the user search with the account number/, async function () {
    await navigationScenario.navigateToAccountScreen()
});

When(/^the user creates a payment request for EFT policy/, async function () {
    await navigationScenario.navigateToPaymentRequest()
    await paymentRequestScenario.paymentRequest()
});

Then(/^the payment request is added successfully/, async function () {
    await paymentRequestScenario.validatePaymentRequest()
});
