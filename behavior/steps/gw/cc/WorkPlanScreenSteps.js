const { When, Then } = require("@cucumber/cucumber")
import { WorkPlanScenario } from "../../../../ui/actions/gw/cc/WorkPlanScenario"

const workPlanScenario = new WorkPlanScenario()

When(/^the user click on complete in work plan screen/, async function () {
    await workPlanScenario.workPlanActivity()
});

Then(/^the status should be complete/, async function () {
    await workPlanScenario.workPlanActivityStatusValidation()
});