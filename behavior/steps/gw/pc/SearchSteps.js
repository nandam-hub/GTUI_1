const { When, Then } = require("@cucumber/cucumber")
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario";
import { SearchScenario } from "../../../../ui/actions/gw/pc/SearchScenario";
import { AccountSummaryScenario } from "../../../../ui/actions/gw/pc/AccountSummaryScenario";
import { clickTableRecord, searchTableRecord } from "../../../../ui/util/gw/helper";
import world from "../../../../ui/util/gw/world";
import { t } from "testcafe"

const navigationScenario = new NavigationScenario()
const searchScenario = new SearchScenario()
const accountSummaryScenario = new AccountSummaryScenario()

When(/^the user searches for the policy with policy number/, async function () {
    await navigationScenario.navigateSearchPolicyScreen()
    await searchScenario.searchWithPolicyNumber(t.ctx.PolicyNumber)
});

Then(/^the policy details are loaded successfully/, async function () {    
    await clickTableRecord(t.ctx.PolicyNumber, 2)
    await searchScenario.verifyPolicySummaryHeader()
});

When(/^the user searches contact in policycenter/, async function (t) {
    await navigationScenario.navigateContactSearchScreen()
    await searchScenario.contactSearchPersonWithName(t.ctx.FirstName, t.ctx.LastName)
});

Then(/^the contact details are loaded successfully/, async function (t) {
    await searchScenario.contactValidation()
});

When(/^the user searches for an account with account number/, async function () {
    await navigationScenario.navigateSearchAccountScreen()
    await searchScenario.searchWithAccountNumber(world.dataMap.get('AccountNumber'))
});

Then(/^the account details are loaded/, async function () {
    await searchTableRecord(1, world.dataMap.get('AccountNumber'))
    await accountSummaryScenario.validateAccounSummaryHeader()
});