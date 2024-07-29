import {PcfButton, PcfSelectInput } from '@gtui/gt-ui-framework';
 
export class ChangeWizard_New {
    changePolicyNext = PcfButton('#StartPolicyChange-StartPolicyChangeScreen-NewPolicyChange')
    changePolicyNewAddressTab= PcfButton('#PolicyChangeWizard-LOBWizardStepGroup-PolicyChangeWizard_PolicyInfoScreen-PolicyChangeWizard_PolicyInfoDV-AccountInfoInputSet-ChangePolicyAddressButton-ChangePolicyAddressButtonMenuIcon')
    changePolicyNewAddress = PcfSelectInput('#PolicyChangeWizard-LOBWizardStepGroup-PolicyChangeWizard_PolicyInfoScreen-PolicyChangeWizard_PolicyInfoDV-AccountInfoInputSet-ChangePolicyAddressButton-AddAddressMenuItem')
    changePolicyQuote = PcfButton('#PolicyChangeWizard-LOBWizardStepGroup-PolicyChangeWizard_PolicyInfoScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote')
    changePoloicyIssue =PcfButton('#PolicyChangeWizard-PolicyChangeWizard_QuoteScreen-JobWizardToolbarButtonSet-BindPolicyChange')
    changePolicyAddressType = PcfButton('#PolicyChangeWizard-PolicyChangeWizard_QuoteScreen-Quote_SummaryDV-PolicyAddress-PolicyAddressDisplayInputSet-AddressType')
}