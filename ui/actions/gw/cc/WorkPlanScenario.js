import { ClaimWorkplan_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/claim/ClaimWorkplan_Ext"
import { t } from "testcafe"
import { findTable, performClickInTable, validateTableRecord } from "../../../util/gw/helper"
import world from '../../../util/gw/world'

const claimWorkplan_Ext = new ClaimWorkplan_Ext()
export class WorkPlanScenario {

    async workPlanActivity() {
        await claimWorkplan_Ext.workPlanFilter.selectOptionByLabel(world.dataMap.get('WorkPlanFilter'))
        await claimWorkplan_Ext.activitiesCheckbox.click()
        await claimWorkplan_Ext.claimWorkplanScreenClaimWorkplan_CompleteButton.click()
    }

    async workPlanActivityStatusValidation() {
        await t.expect(await validateTableRecord("Status", "Complete", 5)).contains(world.dataMap.get('Status'))
    }

    async closeAllWorkPlanActivities() {
        t.ctx.TableIdentifier = "Due"
        let foundTable = await findTable(t.ctx.TableIdentifier)
        const rowCount = await foundTable.find('tr').count
        for (let i = 1; i < rowCount; i++) {
            await performClickInTable(`[id*="${i - 1}-_Checkbox"]`, i)
        }
        await claimWorkplan_Ext.claimWorkplanScreenClaimWorkplan_CompleteButton.click()
    }
}
