const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { PrintExportScenario } from "../../../../ui/actions/gw/cc/PrintExportScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";

const printExportScenario = new PrintExportScenario();
const navigationScenario = new NavigationScenario();

When('the user downloads adjuster from custom export', async function () {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await printExportScenario.downloadExposureDocument();
});
Then('the downloaded file is validated', async function () {
   // TO Do - need to do Validation Part//
});