import { ClaimMenuLinks_Ext } from './scenarioPages/navigation/menuLinks/ClaimMenuLinks_Ext'
import { t } from 'testcafe'
import { navigateAndClickSubmenu, generateRandomStringFunction, clickTableRecord } from "../../../../ui/util/gw/helper";
import { NewClaimSaved } from "../../../../ui/pages/gw/generated/claimsolutions/pages/other/NewClaimSaved"
import {ClaimContacts_Ext} from "./scenarioPages/claim/claimPartiesGroup/ClaimContacts_Ext"
const claimMenuLinks_Ext = new ClaimMenuLinks_Ext()
const newClaimSaved = new NewClaimSaved()
const claimContacts_Ext = new ClaimContacts_Ext()

export class ContactScenario {

    async editContact() {
        await newClaimSaved.newClaimSavedDVGoToClaim.click()
        await claimMenuLinks_Ext.partiesInvolved.click()
        await navigateAndClickSubmenu(['Contacts'], '')
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