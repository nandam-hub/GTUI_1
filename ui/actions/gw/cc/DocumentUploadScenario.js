import { t, Selector } from "testcafe"
import { ClaimMenuActions_Ext } from "./scenarioPages/navigation/menuActions/ClaimMenuActions_Ext"
import { ClaimMenuActions } from "../../../pages/gw/generated/claimsolutions/pages/navigation/menuActions/ClaimMenuActions";
import { ClaimDocuments_Ext } from "../../../pages/gw/generated/claimsolutions/pages/claim/ClaimDocuments_Ext";
import { returnDataFromTable } from "../../../util/gw/helper";

const claimMenuActions_Ext = new ClaimMenuActions_Ext();
const claimMenuActions = new ClaimMenuActions();
const claimDocuments_Ext = new ClaimDocuments_Ext();
export class DocumentUploadScenario {

    async selectUploadDocument() {
        await claimMenuActions_Ext.claimMenuActions.click();
        await claimMenuActions.claimClaimMenuActionsClaimMenuActions_NewDocumentClaimNewDocumentMenuItemSetClaimNewDocumentMenuItemSet_Link.click();
    }
    async fileSelecting() {
        const addFilesButton = Selector('#ClaimNewDocumentLinkedWorksheet-UploadDocumentScreen-FileInput--browseButton');
        const fileInput = Selector('input[type="file"]')
        const filePath = "../ui/testdata/cc/text.txt"
        await t.wait(2000);
        await t.setFilesToUpload(fileInput, filePath)
        await t.wait(5000)
        await t.expect((claimDocuments_Ext.DocumentDetailsEdit).component.exists).ok();
    }
    async validateDocumentUpload() {
        await t.expect((await returnDataFromTable(2))).ok();
    }
}