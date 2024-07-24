import { ReinstatementWizard_New } from "./scenarioPages/policy/ReinstatementWizard_New.js"
import { Summary } from "../../../pages/gw/generated/policysolutions/pages/policy/Summary.js"
import { Summary_Ext } from "../../../actions/gw/pc/scenarioPages/policy/Summary_Ext.js"
import { JobComplete_New } from "./scenarioPages/other/JobComplete_New.js"
import world from "../../../util/gw/world.js"
import { t } from "testcafe"

const summary = new Summary()
const reinstatementWizard_New  = new ReinstatementWizard_New ()
const jobComplete_New = new JobComplete_New()
const summary_Ext = new Summary_Ext()

export class ReinstatePolicyScenario {

    async reinstatePolicy() {
        await jobComplete_New.jobComplete_ViewPolicyHyperLink.click()
        await summary_Ext.newTransactionTab.click()
        await summary.policyDetailsDetailViewTileReinstatePolicy.click()
        await reinstatementWizard_New.reinstate_reason.selectOptionByLabel(world.dataMap.get('Reason'))
        await reinstatementWizard_New.reinstateNextButton.click()
        await reinstatementWizard_New.reinstateQuoteButton.click()
        await reinstatementWizard_New.reinstatePolicy.click()
    }

    async validateReinstate() {
        await t.expect(await reinstatementWizard_New.reinstateComplete_Title.component.textContent).eql('Reinstatement Bound')
        }
    }