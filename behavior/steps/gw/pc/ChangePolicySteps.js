const { When, Then } = require("@cucumber/cucumber");
import { ChangePolicyScenario } from "../../../../ui/actions/gw/pc/ChangePolicyScenario"

const changePolicyScenario = new ChangePolicyScenario();

Then(/^the user perform change policy transaction/, async function () {
    await changePolicyScenario.changePolicy()
});

Then(/^the policy is changed successfully/, async function () {
    await changePolicyScenario.validateChangePolicy()
});