const { When, Then } = require("@cucumber/cucumber");
import { RewritePolicyScenario } from "../../../../ui/actions/gw/pc/RewritePolicyScenario"

const rewritePolicyScenario = new RewritePolicyScenario();


Then(/^the user perform rewrite the cancel policy transaction/, async function () {
    await rewritePolicyScenario.rewritePolicy()
});

Then(/^the sucessfully rewrite policy/, async function () {
    await rewritePolicyScenario.validateRewrite()
});