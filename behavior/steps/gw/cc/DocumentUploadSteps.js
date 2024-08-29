const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { DocumentUploadScenario } from "../../../../ui/actions/gw/cc/DocumentUploadScenario";

const documentUploadScenario = new DocumentUploadScenario();

When(/^the user upload the document/, async function () {
    await documentUploadScenario.selectUploadDocument();
    await documentUploadScenario.fileSelecting();
});
Then(/^the user validate the uploaded document/, async function () {
    //TO DO: need to validate the uploaded document //
    await documentUploadScenario.validateDocumentUpload()
});