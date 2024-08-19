const { When, Then } = require("@cucumber/cucumber");
import { t } from "testcafe";
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario"
import { OverrideDistributionScenario } from "../../../../ui/actions/gw/bc/OverrideDistributionScenario"

const navigationScenario = new NavigationScenario();
const overrideDistributionScenario = new OverrideDistributionScenario()

When(/^the user search with the account number/, async function (t) {
    await navigationScenario.navigateToAccountScreen()
});

When(/^the user makes payment in new direct bill payment from action tab/, async function (t) {
    await navigationScenario.navigateToOverrideDistributionTab()
    await overrideDistributionScenario.overrideDistribution()
});

Then(/^the override distribution is applied successfully/, async function () {
    await overrideDistributionScenario.validateOverrideDistribution()
});