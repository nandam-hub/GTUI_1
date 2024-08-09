import { PcfComponent, PcfSelectInput, PcfButton } from '@gtui/gt-ui-framework';
import { ClaimMenuLinks } from "../../../../../pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks"

export class ClaimMenuLinks_Ext extends ClaimMenuLinks {
    claimLossDetailsGroup = PcfComponent ('#Claim-MenuLinks-Claim_ClaimLossDetailsGroup > div.gw-action--inner')
    
    
    fnolWizardCreateUnverifiedPolicy = PcfComponent('#FNOLWizard-FNOLWizard_FindPolicyScreen-ScreenMode_1');
    fnolWizardNameMenuSelection = PcfComponent('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-NewClaimPolicyGeneralPanelSet-NewClaimPolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewPerson');
    fNOLWizardNameMenuIcon = PcfButton('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-NewClaimPolicyGeneralPanelSet-NewClaimPolicyGeneralDV-Insured_Name-Insured_NameMenuIcon');
    fnolWizardNameDropdown = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-BasicInfoDetailViewPanelDV-ReportedBy_Name');
}