const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { DocumentUploadScenario } from "../../../../ui/actions/gw/cc/DocumentUploadScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";

const documentUploadScenario = new DocumentUploadScenario();
const navigationScenario = new NavigationScenario();

When('the user uploads the document', async function () {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await documentUploadScenario.selectUploadDocument();
    await documentUploadScenario.fileSelecting();
});
Then('the document is uploaded successfully', async function () {
    //TO DO: need to validate the uploaded document //
    await documentUploadScenario.validateDocumentUpload()
});