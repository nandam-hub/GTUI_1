import { ReinstatementWizard_New } from "./scenarioPages/policy/ReinstatementWizard_New"
import { ChangeWizard_New } from "./scenarioPages/policy/PolicyChangeWizard_New"
import { Summary_Ext } from "../../../actions/gw/pc/scenarioPages/policy/Summary_Ext"
import { JobComplete_New } from "./scenarioPages/other/JobComplete_New"
import { NewAccount_Ext } from "../../../actions/gw/pc/scenarioPages/account/NewAccount_Ext"
import { EditPolicyAddressPopup_Ext } from "../../../actions/gw/pc/scenarioPages/policy/EditPolicyAddressPopup_Ext"
import world from "../../../util/gw/world"
import { t } from "testcafe"

const reinstatementWizard_New  = new ReinstatementWizard_New ()
const changeWizard_New = new ChangeWizard_New()
const jobComplete_New = new JobComplete_New()
const summary_Ext = new Summary_Ext()
const newAccount_Ext = new NewAccount_Ext()
const editPolicyAddressPopup_Ext = new EditPolicyAddressPopup_Ext()

export class ChangePolicyScenario {

    async addressDetailschange() {
        await jobComplete_New.jobComplete_ViewPolicyHyperLink.click()
        await summary_Ext.newTransactionTab.click()
        await summary_Ext.policyDetailsDetailViewTileChangePolicy.click()
        await changeWizard_New.changePolicyNext.click()
        await t.scrollIntoView('#PolicyChangeWizard-LOBWizardStepGroup-PolicyChangeWizard_PolicyInfoScreen-PolicyChangeWizard_PolicyInfoDV-AccountInfoInputSet-ChangePolicyAddressButton_Input' )
        await changeWizard_New.changePolicyNewAddressTab.click()
        await changeWizard_New.changePolicyNewAddress.click()
        await editPolicyAddressPopup_Ext.editPolicyAddressPopupPolicyAddressInputSetAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1.setValue(world.dataMap.get('Address1'))
        await editPolicyAddressPopup_Ext.editPolicyAddressPopupPolicyAddressInputSetAddressInputSetglobalAddressContainerGlobalAddressInputSetCity.setValue(world.dataMap.get('City'))
        await editPolicyAddressPopup_Ext.editPolicyAddressPopupPolicyAddressInputSetAddressInputSetglobalAddressContainerGlobalAddressInputSetState.click()
        await editPolicyAddressPopup_Ext.editPolicyAddressPopupPolicyAddressInputSetAddressInputSetglobalAddressContainerGlobalAddressInputSetState.selectOptionByLabel(world.dataMap.get('State'))
        await editPolicyAddressPopup_Ext.editPolicyZIPCode.setValue(world.dataMap.get('ZIPCode'))
        await editPolicyAddressPopup_Ext.policyAddressInputSetAddressType.click()
        await editPolicyAddressPopup_Ext.policyAddressInputSetAddressType.selectOptionByLabel(world.dataMap.get('AddressType'))
        await editPolicyAddressPopup_Ext.editPolicyAddressPopupUpdate.click()
    } 
        async quoteChangePolicy() {
        await changeWizard_New.changePolicyQuote.click()
    }

        async issueChangePolicy() {
        await changeWizard_New.changePoloicyIssue.click()
    }

    async validateAddressDeatilsChange() {
        await t.expect(await reinstatementWizard_New.reinstateComplete_Title.component.textContent).eql('Policy Change Bound')
        await jobComplete_New.jobComplete_Review_Changes.click()
        await t.expect(await changeWizard_New.changePolicyAddressType.component.textContent).eql(world.dataMap.get('AddressType'))
        }
    }