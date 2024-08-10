const { When, Then } = require("@cucumber/cucumber");
import { t } from 'testcafe';
import { RiskAnalysisScenario} from '../../../../ui/actions/gw/pc/RiskAnalysisScenario'

const riskAnalysisScenario = new RiskAnalysisScenario()
When(/^the user manually adds (.*) UW/, async function (t, stepArguments) {
    await riskAnalysisScenario.addManualUW(stepArguments[0])
});

When(/^the user approves the UW issues/, async function () {
await riskAnalysisScenario.clickApproveOrRejectUWIssue()
await riskAnalysisScenario.riskApprovalDetails()
});