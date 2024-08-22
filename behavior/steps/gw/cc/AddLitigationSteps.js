const { When, Then } = require("@cucumber/cucumber")
import { AddLitigationScenario } from "../../../../ui/actions/gw/cc/AddLitigationScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario"

const navigationScenario = new NavigationScenario()
const addLitigationScenario = new AddLitigationScenario()

When(/^the user adds new litigation/, async function () {
   await navigationScenario.navigateToLitigation()
   await addLitigationScenario.addNewLitigation()
});

Then(/^the litigation is added successfully/, async function () {
    await navigationScenario.navigateToLitigation()
    await addLitigationScenario.litigationValidation()
});