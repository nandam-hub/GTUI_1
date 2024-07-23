import { PcfTextInput, PcfComponent, PcfButton, PcfSelectInput } from '@gtui/gt-ui-framework';
 
export class CancelPolicy_New {
    policyDropDown = PcfButton('#TabBar-PolicyTab > div.gw-action--expand-button')
    searchPolicy = PcfButton('#TabBar-PolicyTab-PolicyTab_PolicyRetrievalItem_Button > span')
    newTransactionTab = PcfButton('#PolicyFile_Summary-PolicyOverviewDashboard-PolicyDetailsDetailViewTile-0')
    cancelPolicy = PcfButton('#PolicyFile_Summary-PolicyOverviewDashboard-PolicyDetailsDetailViewTile-CancelPolicy')
    cancelPolicySource = PcfSelectInput('#StartCancellation-StartCancellationScreen-CancelPolicyDV-Source')
    cancelPolicyReason = PcfSelectInput('#StartCancellation-StartCancellationScreen-CancelPolicyDV-Reason')
    cancelPolicyStartCancellation = PcfButton('#StartCancellation-StartCancellationScreen-NewCancellation')
    cancelPolicyBindOption = PcfButton('#CancellationWizard-CancellationWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions')
    cancelPolicyBindOptionCancelNow = PcfButton('#CancellationWizard-CancellationWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-CancelNow')
}