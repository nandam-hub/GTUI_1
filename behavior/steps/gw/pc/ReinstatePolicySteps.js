const { When, Then } = require("@cucumber/cucumber");
import { ReinstatePolicyScenario } from "../../../../ui/actions/gw/pc/ReinstatePolicyScenario"
import { t } from "testcafe";

const reinstatePolicyScenario = new ReinstatePolicyScenario();

Then(/^the user perform reinstate policy transaction/, async function () {
    await reinstatePolicyScenario.reinstatePolicy()
});

Then(/^the reinstate is successful/, async function () {
    await reinstatePolicyScenario.validateReinstate()
});
Then(/^the user validates policy transaction status/, async function () {
    await reinstatePolicyScenario.validatingPolicyTransactionStatus()
    await t.wait(5000)
});





