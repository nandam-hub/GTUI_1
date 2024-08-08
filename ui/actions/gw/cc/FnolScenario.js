import { FNOLWizard_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/claim/FNOLWizard_Ext"
import { dateFunction, splitFunction, generateRandomStringFunction } from "../../../../ui/util/gw/helper"
import { NewContactPopup } from "../../../../ui/pages/gw/generated/claimsolutions/pages/popup/New/NewContactPopup"
import { NewClaimSaved_Ext } from "./scenarioPages/other/NewClaimSaved_Ext"
import world from "../../../../ui/util/gw/world"
import { t } from "testcafe"

const fNOLWizard_Ext = new FNOLWizard_Ext();
const newContactPopup = new NewContactPopup()
const newClaimSaved_Ext = new NewClaimSaved_Ext()

export class FnolScenario {
    async searchOrCreatePolicy() {
        console.log("On Step 1: Search or Create Policy screen")
        await fNOLWizard_Ext.fnolWizardCreateUnverifiedPolicy.click()
        await fNOLWizard_Ext.fNOLWizardFindPolicyPanelSetPolicyNumber.setValue(world.dataMap.get('PolicyNumber'))
        await fNOLWizard_Ext.fNOLWizardFindPolicyPanelSetType.click()
        await fNOLWizard_Ext.fNOLWizardFindPolicyPanelSetType.selectOptionByLabel(world.dataMap.get('Type'))
        await fNOLWizard_Ext.fNOLWizardFindPolicyPanelSetClaim_LossDate.setValue(dateFunction(world.dataMap.get('LossDate')))
        await fNOLWizard_Ext.newClaimPolicyGeneralDVEffectiveDate.setValue(dateFunction(world.dataMap.get('EffectiveDate')))
        await fNOLWizard_Ext.newClaimPolicyGeneralDVExpirationDate.setValue(dateFunction(world.dataMap.get('ExpirationDate')))
        await fNOLWizard_Ext.fNOLWizardNameMenuIcon.click()
        await fNOLWizard_Ext.fnolWizardNameMenuSelection.click()
    }

    async newPerson() {
        console.log("On New Person screen")
        t.ctx.insuredName = generateRandomStringFunction(4)
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetLastName.setValue(t.ctx.insuredName)
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDV_tbContactDetailToolbarButtonSetCustomUpdateButton.click()
    }

    async clickNext() {
        await fNOLWizard_Ext.fNOLWizardNext.click()
    }

    async addBasicInformation() {
        console.log("On Step 2 of 5: Basic information screen")
        await fNOLWizard_Ext.fnolWizardNameDropdown.selectOptionByLabel(t.ctx.insuredName)
    }

    async addPropertyClaimInformation() {
        console.log("On Step 3 of 5: Add claim information screen")
        await fNOLWizard_Ext.fNOLWizard_NewLossDetailsPanelSetClaim_LossCause.selectOptionByLabel(world.dataMap.get('LossCause'))
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsPanelFNOLWizard_NewLossDetailsPanelSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCity.setValue(world.dataMap.get('City'))
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsPanelFNOLWizard_NewLossDetailsPanelSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.click()
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsPanelFNOLWizard_NewLossDetailsPanelSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.selectOptionByLabel(world.dataMap.get('State'))
    }

    async addAutoClaimInformation() {
        console.log("On Step 3 of 5: Add claim information screen")
        await fNOLWizard_Ext.lossDetailsAddressDVClaim_LossCause.selectOptionByLabel(world.dataMap.get('LossCause'))
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsAddressDVAddressDetailInputSetRefCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCity.setValue(world.dataMap.get('City'))
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsAddressDVAddressDetailInputSetRefCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.click()
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsAddressDVAddressDetailInputSetRefCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.selectOptionByLabel(world.dataMap.get('State'))
    }

    async saveAndAssignClaim() {
        console.log("On Step 5 of 5: Save and Assign Claim screen")
        await fNOLWizard_Ext.fNOLWizardFinish.click()
    }

    async readClaimNumber() {
        t.ctx.claimNo = splitFunction(await newClaimSaved_Ext.newClaimDVAssignedHeader.component.innerText, " ", 1)
        console.log("The claim number is: " + t.ctx.claimNo)
    }
}