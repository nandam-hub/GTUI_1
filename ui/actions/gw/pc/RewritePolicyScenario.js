import { RewriteWizard_New } from "./scenarioPages/policy/RewriteWizard_New.js"
import { JobComplete_New } from "./scenarioPages/other/JobComplete_New.js"
import { Summary_Ext } from "../../../actions/gw/pc/scenarioPages/policy/Summary_Ext.js"

import { t } from "testcafe"

const rewriteWizard_New  = new RewriteWizard_New ()
const jobComplete_New = new JobComplete_New()
const summary_Ext = new Summary_Ext()

export class RewritePolicyScenario {

    async rewritePolicy() {
        await jobComplete_New.jobComplete_ViewPolicyHyperLink.click()
        await summary_Ext.newTransactionTab.click()
        await rewriteWizard_New.rewriteButton.click()
        await rewriteWizard_New.rewriteNextButton.click()
        await rewriteWizard_New.rewriteNextButton.click()
        await rewriteWizard_New.rewriteNextButton.click()
        await rewriteWizard_New.rewriteNextButton.click()
        await rewriteWizard_New.rewriteNextButton.click()
        await rewriteWizard_New.rewriteQuote.click()
        await rewriteWizard_New.rewriteIssuePolicytButton.click()

    }

    async validateRewrite() {
        await t.expect(await jobComplete_New.jobComplete_Title.component.textContent).eql('Rewrite Full Term Bound')
        }
    }
    
    
    
    
    
    




