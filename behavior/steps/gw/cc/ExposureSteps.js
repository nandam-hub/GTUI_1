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

When(/^the user creates BI Liability exposure/, async function () {
    await navigationScenario.navigateCoverageType()
    await exposureScenario.selectBodilyInjury()
    await exposureScenario.newExposure()
    await exposureScenario.injuryIncident()
    await exposureScenario.clickOnUpdate()
});

Then(/^the user validates BI Liability exposure/, async function () {
    await exposureScenario.validateBILiabilityExposure()
});