const { When, Then } = require("@cucumber/cucumber")
import { WorkPlanScenario } from "../../../../ui/actions/gw/cc/WorkPlanScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";

const workPlanScenario = new WorkPlanScenario()
const navigationScenario = new NavigationScenario()

When(/^the user completes the activity work plan/, async function () {
    navigationScenario.navigateClaimWorkplan()
    await workPlanScenario.workPlanActivity()
});

Then(/^the activity work plan status is completed/, async function () {
    await workPlanScenario.workPlanActivityStatusValidation()
});