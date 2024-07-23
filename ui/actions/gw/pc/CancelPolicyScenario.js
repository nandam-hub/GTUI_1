import { CancelPolicy_New } from "./scenarioPages/policy/CancelPolicy_New.js"
import { JobComplete_New } from "./scenarioPages/other/JobComplete_New.js"
import world from "../../../util/gw/world.js"
import { t } from "testcafe"
 
const cancelPolicy_New = new CancelPolicy_New()
const jobComplete_New = new JobComplete_New()
 
export class CancelPolicyScenario {
 
    async cancelPolicy() {
        await cancelPolicy_New.newTransactionTab.click()
        await cancelPolicy_New.cancelPolicy.click()
        await cancelPolicy_New.cancelPolicySource.selectOptionByLabel(world.dataMap.get('Source'))
        await cancelPolicy_New.cancelPolicyReason.selectOptionByLabel(world.dataMap.get('Reason'))
        await cancelPolicy_New.cancelPolicyStartCancellation.click()
        await cancelPolicy_New.cancelPolicyBindOption.click()
        await cancelPolicy_New.cancelPolicyBindOptionCancelNow.click()
 
    }
 
    async validateCancelStatus() {
        await t.expect(await jobComplete_New.jobComplete_Title.component.textContent).eql('Cancellation Bound')
    }
}