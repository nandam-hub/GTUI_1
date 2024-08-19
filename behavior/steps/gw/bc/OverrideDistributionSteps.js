const { When, Then } = require("@cucumber/cucumber");
import { t } from "testcafe";
 
//import { AccountScreenScenario } from "../../../../ui/actions/gw/bc/AccountScreenScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario"
import { OverrideDistributionScenario } from "../../../../ui/actions/gw/bc/OverrideDistributionScenario"


const navigationScenario = new NavigationScenario();
//const accountScreenScenario = new AccountScreenScenario()
const overrideDistributionScenario = new OverrideDistributionScenario()

When(/^the user search with the account number/, async function (t) {
    await navigationScenario.navigateToAccountScreen()
});

When(/^the user making payment in new direct bill payment from action tab/, async function (t) {
    await overrideDistributionScenario.overrideDistribution()
});

Then(/^override distribution is sucessfully updated/, async function () {
    await overrideDistributionScenario.validateOverrideDistribution()
});