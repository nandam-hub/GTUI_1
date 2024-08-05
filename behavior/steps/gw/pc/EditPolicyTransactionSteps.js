const { When, Then } = require("@cucumber/cucumber")
import { EditPolicyTransactionScenario } from "../../../../ui/actions/gw/pc/EditPolicyTransactionScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario"
import { t } from "testcafe";
import { NewSubmissionScenario } from "../../../../ui/actions/gw/pc/NewSubmissionScenario"

const editPolicyTransactionScenario = new EditPolicyTransactionScenario ();
const navigationScenario= new NavigationScenario ();
const newSubmissionScenario = new NewSubmissionScenario()

Then(/^the user updates GoCommercialPropertyLine coverage through edit policy transaction/, async function () {
    await editPolicyTransactionScenario.editPolicyTransactionOfGoCommercialPropertyLine()
    await editPolicyTransactionScenario.quoteUpdatedPolicy()
    await newSubmissionScenario.issuePolicy()
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
});

Then(/^the coverage is successfully updated for commercial property policy/, async function () {
    await editPolicyTransactionScenario.validateCoverageOfCommercialPolicy()
});