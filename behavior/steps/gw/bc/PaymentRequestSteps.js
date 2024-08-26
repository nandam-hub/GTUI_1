const { When, Then } = require("@cucumber/cucumber");
import { debug } from "console";
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario"
import { PaymentRequestScenario } from "../../../../ui/actions/gw/bc/PaymentRequestScenario";
import { t } from 'testcafe'

const navigationScenario = new NavigationScenario();
const paymentRequestScenario = new PaymentRequestScenario()

When(/^the user search with the account number/, async function () {
    await navigationScenario.navigateToAccountScreen()
    //TO DO- TO UPDATE SCENARIO WITH RUNTIME POLICY
    //await navigationScenario.navigateToAccountScreenWithNewPolicy()
});

When(/^the user creates a payment request for EFT policy/, async function () {
    await navigationScenario.navigateToNewPaymetRequest()
    await paymentRequestScenario.paymentRequest()
});

Then(/^the payment request is added successfully/, async function () {
    await paymentRequestScenario.validatePaymentRequest()
});
