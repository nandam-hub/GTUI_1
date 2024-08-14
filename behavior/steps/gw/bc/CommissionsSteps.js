const { When, Then } = require("@cucumber/cucumber")
import { CommissionsScenario } from "../../../../ui/actions/gw/bc/CommissionsScenario";

const commissionsScenario = new CommissionsScenario()

When(/^the user clicks on commissions screen/, async function () {
    await commissionsScenario.clickOnCommissionsScreen()
});

Then(/^the user validates commission rate/, async function () {
    await commissionsScenario.validateCommissionRate()
});