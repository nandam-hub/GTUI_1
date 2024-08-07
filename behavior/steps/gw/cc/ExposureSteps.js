const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { FnolScenario } from "../../../../ui/actions/gw/cc/FNOLScenario";
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { searchTableRecord } from "../../../../ui/util/gw/helper";
import { ClaimSummaryScenario } from "../../../../ui/actions/gw/cc/ClaimSummaryScenario";
import { ExposureScenario } from "../../../../ui/actions/gw/cc/ExposureScenario";

const fnolScenario = new FnolScenario()
const searchScenario = new SearchScenario()
const navigationScenario = new NavigationScenario()
const claimSummaryScenario = new ClaimSummaryScenario()
const exposureScenario = new ExposureScenario()

When(/^the user create new FNOL for Auto policy/, async function () {
    await navigationScenario.navigateToNewClaimWizard()
    await fnolScenario.searchOrCreatePolicy()
    await fnolScenario.newPerson()
    await fnolScenario.clickNext()
    await fnolScenario.basicInformation()
    await fnolScenario.clickNext()
    await fnolScenario.addAutoClaimInformation()
    await fnolScenario.clickNext()
    await fnolScenario.clickNext()
    await fnolScenario.saveAndAssignClaim()
    await fnolScenario.readClaimNumber()
});

When(/^the user creates BI Liability exposure/, async function () {
    await exposureScenario.createBILiabilityExposure()
});

When(/^the user validates BI Liability exposure/, async function () {
    await exposureScenario.validateBILiabilityExposure()
});