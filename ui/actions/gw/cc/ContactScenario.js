import { ClaimMenuLinks_Ext } from './scenarioPages/navigation/menuLinks/ClaimMenuLinks_Ext'
import { t } from 'testcafe'
import { generateRandomStringFunction, clickTableRecord } from "../../../../ui/util/gw/helper";

import {ClaimContacts_Ext} from "./scenarioPages/claim/claimPartiesGroup/ClaimContacts_Ext"
const claimMenuLinks_Ext = new ClaimMenuLinks_Ext()
const claimContacts_Ext = new ClaimContacts_Ext()

export class ContactScenario {

    async editContact() {
        await clickTableRecord('_Checkbox_checkboxDiv', "Insured, Main Contact, Reporter")
        await claimMenuLinks_Ext.editButton.click()
        t.ctx.editLastName= generateRandomStringFunction(5)
        await claimContacts_Ext.claimContactsClaimContactsScreenPeopleInvolvedDetailedListDetailContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetLastName.setValue(t.ctx.editLastName)
        await claimMenuLinks_Ext.updateContactDetails.click()
    }

    async verifyContactDetails() {
        await t.expect((claimMenuLinks_Ext.contactsHeader).component.exists).ok();
        await t.expect(claimContacts_Ext.personLastName.component.innerText).eql(await t.ctx.editLastName)
    }
}