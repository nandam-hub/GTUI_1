import { PcfButton, PcfComponent} from '@gtui/gt-ui-framework';
import { ClaimMenuLinks} from '../../../../../../pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks'

export class ClaimMenuLinks_Ext extends ClaimMenuLinks {
	partiesInvolved = PcfButton('#Claim-MenuLinks-Claim_ClaimPartiesGroup > div.gw-action--inner')
    editButton = PcfButton('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-ContactBasicsDV_tb-ContactDetailToolbarButtonSet-Edit')
    updateContactDetails = PcfButton('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-ContactBasicsDV_tb-ContactDetailToolbarButtonSet-Update')
    contactsHeader = PcfComponent('#ClaimContacts-ClaimContactsScreen-ttlBar')
}
