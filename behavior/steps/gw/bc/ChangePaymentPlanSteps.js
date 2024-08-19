const { When, Then } = require("@cucumber/cucumber");
import { t } from "testcafe";
import { ChangePaymentPlanScenario } from "../../../../ui/actions/gw/bc/ChangePaymentPlanScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario";

const navigationScenario = new NavigationScenario()
const changePaymentPlanScenario = new ChangePaymentPlanScenario()

When(/^the user loads the change payment plan screen/, async function () {
    await navigationScenario.navigateToChangePaymentPlan()
});

When(/^the user changes the payment plan/, async function () {
    await changePaymentPlanScenario.changePaymentPlan()
});

Then(/^New payment plan is validated/, async function () {
    await changePaymentPlanScenario.validatePaymentPlan()
});