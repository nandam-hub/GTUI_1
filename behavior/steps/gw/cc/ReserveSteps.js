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
    await navigationScenario.ClickClaimMenuAction()
    await navigateAndClickSubmenu(['Other'], 'Recovery Reserve')
    await reserveScenario.addRecoveryReserve()
});

Then('the recovery reserve is created successfully', async function () {
    await reserveScenario.validateRecoveryReserve()
});

When('the user creates reserve', async function () {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await navigationScenario.ClickClaimMenuAction()
    await navigationScenario.navigateToReserve()
    await reserveScenario.createReserve(1)
});

Then('the reserve is created successfully', async function () {
    await reserveScenario.validateCreateReserve()
});

When('the user creates multiple reserve', async function () {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await navigationScenario.ClickClaimMenuAction()
    await navigationScenario.navigateToReserve()
    await reserveScenario.createReserve(6)
});

Then('the multiple reserves are created successfully', async function () {
    await reserveScenario.validateMultipleCreateReserve()
});