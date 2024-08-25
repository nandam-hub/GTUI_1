import { PcfComponent } from '@gtui/gt-ui-framework';
import { ClaimContacts } from '../../../../../../pages/gw/generated/claimsolutions/pages/claim/claimPartiesGroup/ClaimContacts';

export class ClaimContacts_Ext extends ClaimContacts {
	personName = PcfComponent('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-ContactBasicsDV-PersonNameInputSet-GlobalPersonNameInputSet-LastName');
}