import { PcfComponent, PcfSelectInput, PcfButton } from '@gtui/gt-ui-framework';
import { FNOLWizard } from '../../../../../pages/gw/generated/claimsolutions/pages/claim/FNOLWizard';

export class FNOLWizard_Ext extends FNOLWizard {
    fnolWizardCreateUnverifiedPolicy = PcfComponent('#FNOLWizard-FNOLWizard_FindPolicyScreen-ScreenMode_1');
    fnolWizardNameMenuSelection = PcfComponent('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-NewClaimPolicyGeneralPanelSet-NewClaimPolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewPerson');
    fNOLWizardNameMenuIcon = PcfButton('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-NewClaimPolicyGeneralPanelSet-NewClaimPolicyGeneralDV-Insured_Name-Insured_NameMenuIcon');
    fnolWizardNameDropdown = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-BasicInfoDetailViewPanelDV-ReportedBy_Name');
}