const { When, Then } = require("@cucumber/cucumber");
import { ChangePolicyScenario } from "../../../../ui/actions/gw/pc/ChangePolicyScenario"

const changePolicyScenario = new ChangePolicyScenario();

Then(/^the user perform address detail change transaction/, async function () {
    await changePolicyScenario.addressDetailschange()
    await changePolicyScenario.quoteChangePolicy()
    await changePolicyScenario.issueChangePolicy()
});

Then(/^the address detail is changed successfully/, async function () {
    await changePolicyScenario.validateAddressDeatilsChange()
});