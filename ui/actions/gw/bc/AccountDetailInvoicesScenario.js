import { AccountDetailInvoices_Ext } from '../../../../ui/actions/gw/bc/scenarioPages/navigation/AccountDetailInvoices_Ext'
import { dateFunction } from "../../../../ui/util/gw/helper"
import { t } from 'testcafe'

const accountDetailInvoices_Ext = new AccountDetailInvoices_Ext();

export class AccountDetailInvoicesScenario {

    async setInvoiceDate(billDateValue) {
        await accountDetailInvoices_Ext.invoiceDetailDV_tbEdit.click();
        await accountDetailInvoices_Ext.accountInvoiceInformationInputSetInvoiceDate.setValue(dateFunction(billDateValue));
        await accountDetailInvoices_Ext.invoiceDetailDV_tbUpdate.click();
        await t.wait(5000);
    }

    async validateBilledDate(billDateValue) {
        await t.expect(accountDetailInvoices_Ext.accountDetailInvoices_BilledDateUpdated.component.innerText).eql(dateFunction(billDateValue, 'MM/DD/YYYY'));
    }

    async validateInvoiceResentMessageDisplayed() {
        await accountDetailInvoices_Ext.accountDetailInvoicesScreenAccountDetailInvoices_InvoiceSentAlertBar.isAvailable();
    }
}