import { ClaimMenuLinks_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/claim/ClaimMenuLinks_Ext"
import { ClaimAssociations } from "../../../../ui/pages/gw/generated/claimsolutions/pages/claim/claimLossDetailsGroup/ClaimAssociations"
import { NewClaimAssociation_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/claim/NewClaimAssociation_Ext"
import { ClaimSearchPopup } from "../../../pages/gw/generated/claimsolutions/pages/popup/Claim/ClaimSearchPopup"
import { ClaimSearchPopup_New } from "./scenarioPages/claim/ClaimSearchPopup_new"
import world from "../../../util/gw/world"
import { t } from "testcafe"

const claimMenuLinks_Ext = new ClaimMenuLinks_Ext();
const claimAssociations = new ClaimAssociations();
const newClaimAssociation_Ext = new NewClaimAssociation_Ext();
const claimSearchPopup = new ClaimSearchPopup();
const claimSearchPopup_New = new ClaimSearchPopup_New();

export class VerifyAssociationScenario {
    async AddAssociation() {
        await claimMenuLinks_Ext.claimLossDetailsGroup.click()
        await claimMenuLinks_Ext.claim_ClaimLossDetailsGroupClaimLossDetailsGroup_ClaimAssociations.click()
        await claimAssociations.claimAssociationsScreenClaimAssociations_NewButton.click()
        await newClaimAssociation_Ext.claimAssociationDetailDVTitle.setValue(world.dataMap.get('Title'))
        await newClaimAssociation_Ext.claimAssociationDetailDVType.selectOptionByLabel(world.dataMap.get('Type'))
        await newClaimAssociation_Ext.editableClaimsInAssociationLV_tbAdd .click()
        await newClaimAssociation_Ext.newClaimAssociationClaimAssociationDetailScreen.click()
        await claimSearchPopup.claimSearchPopupClaimSearchScreenClaimSearchDVClaimSearchRequiredInputSetClaimNumber.setValue(world.dataMap.get('Claims'))
        await t.scrollIntoView('#ClaimSearchPopup-ClaimSearchScreen-ClaimSearchDV-ClaimSearchAndResetInputSet-Search')
        await claimSearchPopup.claimSearchPopupClaimSearchScreenClaimSearchDVClaimSearchAndResetInputSetSearch.click()
        await claimSearchPopup_New.claimSearchPopup.click()
        await newClaimAssociation_Ext.claimAssociationDetailScreenUpdate.click()
    }
       
    async validateAssociation() {   
            await t.expect(await newClaimAssociation_Ext.claimAssociateScreen.component.textContent).eql(world.dataMap.get('Associations'))
            }
        }

        
