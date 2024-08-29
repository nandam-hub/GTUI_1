import { t, Selector } from "testcafe"
// import { ClaimMenuActions_Ext } from "./scenarioPages/navigation/menuActions/ClaimMenuActions_Ext"
import { ClaimMenuActions } from "../../../pages/gw/generated/claimsolutions/pages/navigation/menuActions/ClaimMenuActions";
import { ClaimDocuments_Ext } from "../../../pages/gw/generated/claimsolutions/pages/claim/ClaimDocuments_Ext";
import { returnDataFromTable } from "../../../util/gw/helper";
import world, { World } from "../../../util/gw/world.js";
import { NavigationScenario } from "./NavigationScenario.js";

// const claimMenuActions_Ext = new ClaimMenuActions_Ext();
const claimMenuActions = new ClaimMenuActions();
const claimDocuments_Ext = new ClaimDocuments_Ext();
const navigationScenario = new NavigationScenario();
export class DocumentUploadScenario {

    async selectUploadDocument() {
        await navigationScenario.ClickClaimMenuAction();
        await claimMenuActions.claimClaimMenuActionsClaimMenuActions_NewDocumentClaimNewDocumentMenuItemSetClaimNewDocumentMenuItemSet_Link.click();
    }
    async fileSelecting() {
        await t.setFilesToUpload(Selector('input[type="file"]'), (world.dataMap.get("filePath")))
        await t.wait(5000)
        await t.expect((claimDocuments_Ext.DocumentDetailsEdit).component.exists).ok();
    }
    async validateDocumentUpload() {
        await t.expect((await returnDataFromTable(2))).ok();
    }
}