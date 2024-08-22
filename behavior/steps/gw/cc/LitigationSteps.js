const { When, Then } = require("@cucumber/cucumber")
import { LitigationScenario } from "../../../../ui/actions/gw/cc/LitigationScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario"

const navigationScenario = new NavigationScenario()
const litigationScenario = new LitigationScenario()

When(/^the user adds new litigation/, async function () {
   await navigationScenario.navigateToLitigation()
   await litigationScenario.addNewLitigation()
});

Then(/^the litigation is added successfully/, async function () {
    await navigationScenario.navigateToLitigation()
    await litigationScenario.litigationValidation()
});