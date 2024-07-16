import { PcfComponent, PcfSelectInput } from '@gtui/gt-ui-framework';
import { ClaimMenuActions } from '../../../../../../pages/gw/generated/claimsolutions/pages/navigation/menuActions/ClaimMenuActions'

export class ClaimMenuActions_Ext extends ClaimMenuActions {
    claimMenuActions = PcfComponent("#Claim-ClaimMenuActions > div")
    activityAutoPilot = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewActivity-NewActivityMenuItemSet-0-NewActivityMenuItemSet_Category > div.gw-action--inner.gw-hasDivider")
    autopilotActionRequired = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewActivity-NewActivityMenuItemSet-0-NewActivityMenuItemSet_Category-0-item > div")
}