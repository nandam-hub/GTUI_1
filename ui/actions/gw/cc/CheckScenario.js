import world from "../../../util/gw/world"
import { t } from "testcafe"
import { NormalCreateCheckWizard_New } from "./scenarioPages/other/NormalCreateCheckWizard_New"
import { validateTableRecord } from "../../../util/gw/helper"
import { BatchProcessInfo_Ext } from "./scenarioPages/serverTools/BatchProcessInfo_Ext"
import { ServerToolsMenuActions } from "../../../pages/gw/generated/claimsolutions/pages/navigation/menuActions/ServerToolsMenuActions"
import { ClaimFinancialsChecksDetail_New } from "./scenarioPages/claim/claimFinancialsGroup/ClaimFinancialsChecksDetail_New"
import { setInputValueIfExists } from '../../../util/gw/ActionHelper'

const normalCreateCheckWizard_New = new NormalCreateCheckWizard_New()
const batchProcessInfo_Ext = new BatchProcessInfo_Ext()
const serverToolsMenuActions = new ServerToolsMenuActions()
const claimFinancialsChecksDetail_New = new ClaimFinancialsChecksDetail_New()

export class CheckScenario {

    async createCheck() {
        await normalCreateCheckWizard_New.primaryPayeeName.selectOptionByLabel(await t.ctx.name)
        await normalCreateCheckWizard_New.type.selectOptionByLabel(world.dataMap.get('Type'))
        await normalCreateCheckWizard_New.next.click()
        await normalCreateCheckWizard_New.reserveLine.selectOptionByLabel(world.dataMap.get('ReserveLine'))
        await normalCreateCheckWizard_New.costType.selectOptionByLabel(world.dataMap.get('CostType'))
        await normalCreateCheckWizard_New.costCategory.selectOptionByLabel(world.dataMap.get('CostCategory'))
        await normalCreateCheckWizard_New.paymentType.selectOptionByLabel(world.dataMap.get('paymentType'))
        await normalCreateCheckWizard_New.amount.setValue(world.dataMap.get('Amount'))
        await normalCreateCheckWizard_New.next.click()
        await normalCreateCheckWizard_New.finsh.click()
    }

    async financialsEscalation() {
        await batchProcessInfo_Ext.financialsEscalation.click()
        await serverToolsMenuActions.serverToolsInternalToolsMenuActions.click()
    }

    async validateCheckDetails() {
        await t.expect((normalCreateCheckWizard_New.financialChecksHeader).component.exists).ok();
        await t.expect(await validateTableRecord("Status", world.dataMap.get('Status'), 2)).eql(world.dataMap.get('GrossAmount'))
    }

    async voidCheck() {
        await claimFinancialsChecksDetail_New.grossAmountLink.click()
        await claimFinancialsChecksDetail_New.voidOrStopCheck.click()
        await setInputValueIfExists(claimFinancialsChecksDetail_New.reasonForVoidOrStop, 'ReasonForVoid', world.dataMap)
        await claimFinancialsChecksDetail_New.voidCheck.click()
        await claimFinancialsChecksDetail_New.upToFinancialsChecks.click()
    }

    async stopCheck() {
        await claimFinancialsChecksDetail_New.grossAmountLink.click()
        await claimFinancialsChecksDetail_New.voidOrStopCheck.click()
        await setInputValueIfExists(claimFinancialsChecksDetail_New.reasonForVoidOrStop, 'ReasonForVoid', world.dataMap)
        await claimFinancialsChecksDetail_New.stopCheck.click()
        await claimFinancialsChecksDetail_New.upToFinancialsChecks.click()
    }
}
