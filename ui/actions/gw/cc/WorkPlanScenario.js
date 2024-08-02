import { ClaimMenuLinks } from "../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks"
import { ClaimWorkplan_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/claim/ClaimWorkplan_Ext"
import { t } from "testcafe"
import { validateTableRecord } from "../../../util/gw/helper"
import world from '../../../util/gw/world'

const claimMenuLinks = new ClaimMenuLinks()
const claimWorkplan_Ext = new ClaimWorkplan_Ext()

export class WorkPlanScenario {

    async workPlanActivity() {
        await claimMenuLinks.menuLinksClaim_ClaimWorkplan.click()
        await claimWorkplan_Ext.workPlanFilter.selectOptionByLabel(world.dataMap.get('WorkPlanFilter'))
        await claimWorkplan_Ext.activitiesCheckbox.click()
        await claimWorkplan_Ext.claimWorkplanScreenClaimWorkplan_CompleteButton.click()
    }

    async workPlanActivityStatusValidation() {
        await t.expect(await validateTableRecord("Status", "Complete", 5)).contains(world.dataMap.get('Status'))
    }

}
