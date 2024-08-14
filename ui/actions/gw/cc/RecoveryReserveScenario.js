import { NewRecoveryReserveSet_Ext } from "./scenarioPages/other/NewRecoveryReserveSet_Ext";
import world from "../../../../ui/util/gw/world"
import { t } from 'testcafe';
import { validateTableRecord } from "../../../../ui/util/gw/helper";

const newRecoveryReserveSet_Ext = new NewRecoveryReserveSet_Ext()

export class RecoveryReserveScenario {

    async addRecoveryReserve() {
        newRecoveryReserveSet_Ext.newReserveSetScreenAdd.click()
        newRecoveryReserveSet_Ext.newRecoveryEditableRecoveryReserves.click()
        newRecoveryReserveSet_Ext.newReserveSetScreenCostType.selectOptionByLabel(world.dataMap.get('CostType'))
        newRecoveryReserveSet_Ext.newReserveSetScreenCostCategory.selectOptionByLabel(world.dataMap.get('CostCategory'))
        newRecoveryReserveSet_Ext.newReserveSetScreenRecoveryCategory.selectOptionByLabel(world.dataMap.get('RecoveryCategory'))
        newRecoveryReserveSet_Ext.newReserveSetScreenNewOpenRecoveryReserves.setValue(world.dataMap.get('NewOpenRecoveryReserves'))
        newRecoveryReserveSet_Ext.newReserveSetScreenUpdate.click()
    }

    async validateRecoveryReserve() {
        await t.expect(await validateTableRecord("Cost Type", "Unspecified Cost Type", 5)).contains(world.dataMap.get('CostType'))
        await t.expect(await validateTableRecord("Cost Category", "Unspecified Cost Category", 6)).contains(world.dataMap.get('CostCategory'))
        await t.expect(await validateTableRecord("Recovery Category", "Credit to expense", 7)).contains(world.dataMap.get('RecoveryCategory'))
    }

}