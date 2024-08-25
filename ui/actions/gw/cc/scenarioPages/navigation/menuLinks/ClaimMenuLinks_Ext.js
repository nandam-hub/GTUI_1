import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';
import { ClaimMenuLinks} from '../../../../../../pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks'

export class ClaimMenuLinks_Ext extends ClaimMenuLinks {
	partiesInvolved = PcfButton('#Claim-MenuLinks-Claim_ClaimPartiesGroup > div.gw-action--inner');
	editContactCheckBox = PcfCheckBox('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-PeopleInvolvedDetailedLV-0-_Checkbox_checkboxDiv')
    editButton = PcfButton('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-ContactBasicsDV_tb-ContactDetailToolbarButtonSet-Edit')
    lastname = PcfTextInput('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-ContactBasicsDV-PersonNameInputSet-GlobalPersonNameInputSet-LastName')
    updateContactDetails = PcfButton('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-ContactBasicsDV_tb-ContactDetailToolbarButtonSet-Update')
    contactsHeader = PcfComponent('#ClaimContacts-ClaimContactsScreen-ttlBar')
}
