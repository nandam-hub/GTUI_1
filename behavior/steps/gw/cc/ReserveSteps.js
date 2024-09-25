const { When, Then } = require("@cucumber/cucumber")
import { ReserveScenario } from '../../../../ui/actions/gw/cc/ReserveScenario'
import { t } from "testcafe";
import { searchTableRecord } from "../../../../ui/util/gw/helper";
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { navigateAndClickSubmenu } from "../../../../ui/util/gw/helper";

const reserveScenario = new ReserveScenario()
const searchScenario = new SearchScenario()
const navigationScenario = new NavigationScenario()

When('the user creates recovery reserve', async function () {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await navigationScenario.clickClaimMenuAction()
    await navigateAndClickSubmenu(['Other'], 'Recovery Reserve')
    await reserveScenario.addRecoveryReserve()
});

Then('the recovery reserve is created successfully', async function () {
    await reserveScenario.validateRecoveryReserve()
});

When('the user creates reserve', async function () {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await navigationScenario.clickClaimMenuAction()
    await navigationScenario.navigateToReserve()
    await reserveScenario.createReserve()
});

Then('the reserve is created successfully', async function () {
    await reserveScenario.validateReserve()
});

When(/^the user creates (.*) reserve/, async function (t, stepArguments) {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await navigationScenario.clickClaimMenuAction()
    await navigationScenario.navigateToReserve()
    await reserveScenario.createReserve(stepArguments[0])
});

Then(/^the (.*) reserves are created successfully/, async function (t, stepArguments) {
    await reserveScenario.validateReserve(stepArguments[0])
});