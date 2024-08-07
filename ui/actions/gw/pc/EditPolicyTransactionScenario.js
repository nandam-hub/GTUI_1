import { SubmissionWizard_New } from "../../../../ui/actions/gw/pc/scenarioPages/navigation//submissionWizard/SubmissionWizard_New"
import { t } from "testcafe"
import world from "../../../util/gw/world"


const submissionWizard_New = new SubmissionWizard_New()

export class EditPolicyTransactionScenario {

    async editPolicyCommercialNavigation() {
        await submissionWizard_New.submissionWizardEditPolicy.click()
        await submissionWizard_New.submissionWizardLOBCommercial1.click()
    }
    
    async quoteUpdatedPolicy() {
        await submissionWizard_New.submissionQuote.click()
    }
 
    async validateCoverageOfCommercialPolicy() {
        await submissionWizard_New.submissionWizardLOBCommercial.click()
        await t.expect(await submissionWizard_New.submissionValidateCoverageOfCommercialLine.component.textContent).eql(world.dataMap.get('UpdatedCoverage'))
    }
    }
