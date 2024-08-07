const { Then } = require("@cucumber/cucumber")
import { EditPolicyTransactionScenario } from "../../../../ui/actions/gw/pc/EditPolicyTransactionScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario"
import { t } from "testcafe";
import { NewSubmissionScenario } from "../../../../ui/actions/gw/pc/NewSubmissionScenario"
import { coverageFilter } from "../../../../ui/util/gw/ActionHelper";

const editPolicyTransactionScenario = new EditPolicyTransactionScenario();
const navigationScenario = new NavigationScenario();
const newSubmissionScenario = new NewSubmissionScenario()

Then(/^the user updates coverage through edit policy transaction/, async function () {
    await editPolicyTransactionScenario.editPolicyCommercialNavigation()
    await coverageFilter()
});

Then(/^the user contniue to quote and issue the policy with the updated changes/, async function () {
    await editPolicyTransactionScenario.quoteUpdatedPolicy()
    await newSubmissionScenario.issuePolicy()
});

Then(/^the coverage is successfully updated for commercial property policy/, async function () {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await editPolicyTransactionScenario.validateCoverageOfCommercialPolicy()
});