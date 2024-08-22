const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { SpecialInvestigationDetailsScenario } from "../../../../ui/actions/gw/cc/scenarioPages/search/SpecialInvestigationDetailsScenario";

const navigationScenario = new NavigationScenario();
const specialInvestigationDetailsScenario = new SpecialInvestigationDetailsScenario();

When(/^the user navigates to SIU screen through lossdetails/, async function () {
    await navigationScenario.navigateToLossDetails();
    await specialInvestigationDetailsScenario.sIDetailsScreen();
    await navigationScenario.navigateClaimWorkplan();
});
Then(/^the user verify in the workplan screen/, async function () {
    await specialInvestigationDetailsScenario.validateSid();
});