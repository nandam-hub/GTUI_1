import { SubmissionWizard_New } from "../../../../ui/actions/gw/pc/scenarioPages/navigation//submissionWizard/SubmissionWizard_New"
import { JobComplete_New } from "./scenarioPages/other/JobComplete_New"
import { t } from "testcafe"
 
const submissionWizard_New = new SubmissionWizard_New()
const jobComplete_New = new JobComplete_New()

export class EditPolicyScenario {

    async editPolicy() {
        await submissionWizard_New.submissionWizardEditPolicy.click()
        await submissionWizard_New.submissionWizardLOBCommercial.click()
        await submissionWizard_New.submissionWizardCheckBox.click()
        await submissionWizard_New.submissionQuote.click()
        await submissionWizard_New.submissionWizard_Bind.click()
        await submissionWizard_New.submissionWizard_IssuePolicy.click()
        await jobComplete_New.jobComplete_SubmissionNumber.click()
    }
 
    async validateEditStatus() {
        await submissionWizard_New.submissionWizardLOBCommercial.click()
        await t.expect(await submissionWizard_New.submissionValidateCoverage.component.textContent).eql('For any one tree, shrub, or plant')
    }
}