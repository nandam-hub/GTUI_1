const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { FnolScenario } from "../../../../ui/actions/gw/cc/FNOLScenario";
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { searchTableRecord } from "../../../../ui/util/gw/helper";
import { ClaimSummaryScenario } from "../../../../ui/actions/gw/cc/ClaimSummaryScenario";

const fnolScenario = new FnolScenario()
const searchScenario = new SearchScenario()
const navigationScenario = new NavigationScenario()
const claimSummaryScenario = new ClaimSummaryScenario()

When(/^the user creates new FNOL/, async function () {
    await navigationScenario.navigateToNewClaimWizard()
    await fnolScenario.newFnolCreation()
    await fnolScenario.readClaimNumber()
});

When(/^the user search with claim number/, async function () {
    await navigationScenario.openClaim(t.ctx.claimNo);
});

Then(/^the FNOL is added successfully/, async function () {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await claimSummaryScenario.verifySummaryHeader()
});