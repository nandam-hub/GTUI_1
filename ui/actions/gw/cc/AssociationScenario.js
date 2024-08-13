import { ClaimMenuLinks_Ext } from "./scenarioPages/claim/ClaimMenuLinks_Ext"
import { ClaimAssociations } from "../../../pages/gw/generated/claimsolutions/pages/claim/claimLossDetailsGroup/ClaimAssociations"
import { NewClaimAssociation_Ext } from "./scenarioPages/claim/NewClaimAssociation_Ext"
import { ClaimSearchPopup } from "../../../pages/gw/generated/claimsolutions/pages/popup/Claim/ClaimSearchPopup"
import { ClaimSearchPopup_New } from "./scenarioPages/claim/ClaimSearchPopup_new"
import world from "../../../util/gw/world"
import { t } from "testcafe"
import { searchTableRecord, validateTableRecord } from "../../../util/gw/helper"

const claimMenuLinks_Ext = new ClaimMenuLinks_Ext();
const claimAssociations = new ClaimAssociations();
const newClaimAssociation_Ext = new NewClaimAssociation_Ext();
const claimSearchPopup = new ClaimSearchPopup();
const claimSearchPopup_New = new ClaimSearchPopup_New();

export class AssociationScenario {
    async addAssociation() {
        await claimAssociations.claimAssociationsScreenClaimAssociations_NewButton.click()
        await newClaimAssociation_Ext.claimAssociationDetailDVTitle.setValue(world.dataMap.get('Title'))
        await newClaimAssociation_Ext.claimAssociationDetailDVType.selectOptionByLabel(world.dataMap.get('Type'))
        await newClaimAssociation_Ext.editableClaimsInAssociationLV_tbAdd .click()
        await newClaimAssociation_Ext.newClaimAssociationClaimAssociationDetailScreen.click()
    }

    async claimSearchPopUp() {
        await claimSearchPopup.claimSearchPopupClaimSearchScreenClaimSearchDVClaimSearchRequiredInputSetClaimNumber.setValue(world.dataMap.get('Claims'))
        await t.scrollIntoView('#ClaimSearchPopup-ClaimSearchScreen-ClaimSearchDV-ClaimSearchAndResetInputSet-Search')
        await claimSearchPopup.claimSearchPopupClaimSearchScreenClaimSearchDVClaimSearchAndResetInputSetSearch.click()
        await claimSearchPopup_New.claimSearchPopup.click()
    }
    
    async updateAssociation() {
        await newClaimAssociation_Ext.claimAssociationDetailScreenUpdate.click()
    }
    
    //TODO: Currently failing. Need to check and update
    async validateAssociation() {   
        await t.expect (await validateTableRecord("Claims",(world.dataMap.get('Claims')),1)).eql(world.dataMap.get('Associations'))
        //await searchTableRecord(1, world.dataMap.get('Associations'))
        //await t.expect(await newClaimAssociation_Ext.claimAssociateScreen.component.textContent).eql(world.dataMap.get('Associations'))
        }
    }
