import { RiskAnalysis_Ext } from './scenarioPages/policy/RiskAnalysis_Ext'
import { NewManualUWIssuePopup } from '../../../pages/gw/generated/policysolutions/pages/popup/New/NewManualUWIssuePopup'
import { clickTableRecord, convertToInt } from "../../../util/gw/helper"
import { RiskApprovalDetailsPopup } from '../../../pages/gw/generated/policysolutions/pages/popup/Risk/RiskApprovalDetailsPopup'
import { t } from 'testcafe'
import world from "../../../../ui/util/gw/world"

const riskAnalysis_Ext = new RiskAnalysis_Ext()
const newManualUWIssuePopup = new NewManualUWIssuePopup()
const riskApprovalDetailsPopup = new RiskApprovalDetailsPopup()

export class RiskAnalysisScenario {

    async addManualUW(issuesNum = "1") {     
        let iterationNum = convertToInt(issuesNum.replace(/["]/g, "")) 
        console.log(iterationNum)  
        for (let i = 1; i <= iterationNum; i++) {
            await riskAnalysis_Ext.addUWIssue.click()
            await newManualUWIssuePopup.newUWIssueDelegateDVIssueType.selectOptionByLabel(world.dataMap.get(`IssueType${i}`))
            await newManualUWIssuePopup.newUWIssueDelegateDVShortDescription.setValue(world.dataMap.get(`IssueDescription${i}`))
            await newManualUWIssuePopup.newManualUWIssuePopupUpdate.click()
        }
    }

    async clickApproveOrRejectUWIssue() {
        await clickTableRecord(world.dataMap.get('ReferenceColumnHeader'),
            world.dataMap.get('ReferenceCellString'),
            world.dataMap.get('ExpectedCellString'),
            world.dataMap.get('TargetColumnIndex'))
        await t.debug()
    }

    async riskApprovalDetails(){
        await riskAnalysis_Ext.riskValidUntil.selectOptionByLabel(world.dataMap.get('ValidUntil'))
        await riskApprovalDetailsPopup.riskApprovalDetailsPopupUpdate.click()
    }
}