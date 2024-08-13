const { When, Then } = require("@cucumber/cucumber")
import { RecoveryReserveScenario } from '../../../../ui/actions/gw/cc/RecoveryReserveScenario'
import { t } from "testcafe";
import { searchTableRecord } from "../../../../ui/util/gw/helper";
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { navigateAndClickSubmenu } from "../../../../ui/util/gw/helper";

const recoveryReserveScenario = new RecoveryReserveScenario()
const searchScenario = new SearchScenario()
const navigationScenario = new NavigationScenario()

When(/^the user creates recovery reserve/, async function () {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await navigationScenario.ClickClaimMenuAction()
    await navigateAndClickSubmenu(['Other'], 'Recovery Reserve')
    await recoveryReserveScenario.addRecoveryReserve()
});

Then(/^the user validates recovery reserve/, async function () {
    await recoveryReserveScenario.validateRecoveryReserve()
});
