import { PcfTextInput, PcfComponent, PcfButton, PcfSelectInput } from '@gtui/gt-ui-framework';



export class CancelPolicyTransaction_New {
    policyDropDown = PcfButton ('#TabBar-PolicyTab > div.gw-action--expand-button > div')
    searchPolicy = PcfButton('#TabBar-PolicyTab-PolicyTab_PolicyRetrievalItem_Button > span')
    cancelPolicy =PcfButton( '#PolicyFile_Summary-PolicyOverviewDashboard-PolicyDetailsDetailViewTile-CancelPolicy')
    newTransactionTab=PcfButton('#PolicyFile_Summary-PolicyOverviewDashboard-PolicyDetailsDetailViewTile-0')
    cancelPolicySource = PcfSelectInput('#StartCancellation-StartCancellationScreen-CancelPolicyDV-Source')
    cancelPolicyReason = PcfSelectInput('#StartCancellation-StartCancellationScreen-CancelPolicyDV-Reason')
    cancelPolicyStartCancellation = PcfButton ('#StartCancellation-StartCancellationScreen-NewCancellation')
    cancelPolicyBindOption = PcfButton('#CancellationWizard-CancellationWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions')
    cancelPolicyBindOptionCancelNow = PcfButton('#CancellationWizard-CancellationWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-CancelNow')
    
    
}