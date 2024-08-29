const { When, Then } = require("@cucumber/cucumber")
import { CheckScenario } from "../../../../ui/actions/gw/cc/CheckScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";

const checkScenario = new CheckScenario()
const navigationScenario = new NavigationScenario()

When('the user creates the check', async function () {
    await navigationScenario.navigateToCheck()
    await checkScenario.createCheck()
});

Then('the check details are updated successfully', async function () {
    await checkScenario.validateCheckDetails()
});
