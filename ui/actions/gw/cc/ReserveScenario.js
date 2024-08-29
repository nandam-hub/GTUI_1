import { NewRecoveryReserveSet_Ext } from "./scenarioPages/other/NewRecoveryReserveSet_Ext";
import { NewReserveSet_Ext } from "./scenarioPages/other/NewReserveSet_Ext";
import world from "../../../util/gw/world"
import { t } from 'testcafe';
import { validateTableRecord, selectDropdownInTable, enterDataInTable } from "../../../util/gw/helper";

const newRecoveryReserveSet_Ext = new NewRecoveryReserveSet_Ext()
const newReserveSet_Ext = new NewReserveSet_Ext()

export class ReserveScenario {

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

    /** To create n number of reserves
     * @param {Number} reserveCount - count of reserves to be created
     */
    async createReserve(reserveCount) {
        t.ctx.TableIdentifier = "Exposure";
        for (let i = 1; i <= reserveCount; i++){
            await selectDropdownInTable(newReserveSet_Ext.newReserveSetScreenExposure, world.dataMap.get(`Exposure${i}`), i)
            await selectDropdownInTable(newReserveSet_Ext.newReserveSetScreenCostType, world.dataMap.get(`CostType${i}`), i)
            await selectDropdownInTable(newReserveSet_Ext.newReserveSetScreenCostCategory, world.dataMap.get(`CostCategory${i}`), i)
            await enterDataInTable(newReserveSet_Ext.newReserveSetScreenNewAmount, world.dataMap.get(`NewAvailableReserves${i}`), i)
            if (reserveCount > 1 && i < reserveCount){
                await newReserveSet_Ext.newReserveSetNewReserveSetScreenAdd.click()
            }        
    }
    newReserveSet_Ext.newReserveSetNewReserveSetScreenUpdate.click()
    }

    async validateCreateReserve() {
        await t.expect(await validateTableRecord("Cost Category", "Property Repair", 5)).contains(world.dataMap.get('CostType1'))
        await t.expect(await validateTableRecord("Cost Category", "Property Repair", 6)).contains(world.dataMap.get('CostCategory1'))
    }

    async validateMultipleCreateReserve() {
        await t.expect(await validateTableRecord("Cost Category", "Unspecified Cost Category", 5)).contains(world.dataMap.get('CostType1'))
        await t.expect(await validateTableRecord("Cost Category", "Unspecified Cost Category", 6)).contains(world.dataMap.get('CostCategory1'))
        await t.expect(await validateTableRecord("Cost Category", "Burial expenses", 5)).contains(world.dataMap.get('CostType2'))
        await t.expect(await validateTableRecord("Cost Category", "Burial expenses", 6)).contains(world.dataMap.get('CostCategory2'))
        await t.expect(await validateTableRecord("Cost Category", "Death benefits", 5)).contains(world.dataMap.get('CostType3'))
        await t.expect(await validateTableRecord("Cost Category", "Death benefits", 6)).contains(world.dataMap.get('CostCategory3'))
        await t.expect(await validateTableRecord("Cost Category", "Emergency Services", 5)).contains(world.dataMap.get('CostType4'))
        await t.expect(await validateTableRecord("Cost Category", "Emergency Services", 6)).contains(world.dataMap.get('CostCategory4'))
        await t.expect(await validateTableRecord("Cost Category", "Lifetime benefits", 5)).contains(world.dataMap.get('CostType5'))
        await t.expect(await validateTableRecord("Cost Category", "Lifetime benefits", 6)).contains(world.dataMap.get('CostCategory5'))
        await t.expect(await validateTableRecord("Cost Category", "Medical", 5)).contains(world.dataMap.get('CostType6'))
        await t.expect(await validateTableRecord("Cost Category", "Medical", 6)).contains(world.dataMap.get('CostCategory6'))
    }
}