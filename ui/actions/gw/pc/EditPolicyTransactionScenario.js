import { SubmissionWizard_New } from "../../../../ui/actions/gw/pc/scenarioPages/navigation//submissionWizard/SubmissionWizard_New"
import { PolicyMenuActions } from "../../../pages/gw/generated/policysolutions/pages/navigation/menuActions/PolicyMenuActions"
import { t } from "testcafe"
import world from "../../../util/gw/world"


const submissionWizard_New = new SubmissionWizard_New()

export class EditPolicyTransactionScenario {

    async quoteUpdatedPolicy() {
        await submissionWizard_New.submissionQuote.click()
    }
}
