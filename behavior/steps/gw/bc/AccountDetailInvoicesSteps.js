const { When, Then } = require("@cucumber/cucumber")
import world from "../../../../ui/util/gw/world"
import { AccountDetailInvoicesScenario } from '../../../../ui/actions/gw/bc/AccountDetailInvoicesScenario'
import { searchTableRecord } from "../../../../ui/util/gw/helper";

const accountDetailInvoicesScenario = new AccountDetailInvoicesScenario();

When(/^the user changes the invoice billed date/, async () => {
    await searchTableRecord(5, world.dataMap.get('InvoiceStatus'))
    await accountDetailInvoicesScenario.setInvoiceDate(world.dataMap.get('InvoiceDate'));
});

When(/^the user resends invoice/, async () => {
    await searchTableRecord(5, world.dataMap.get('InvoiceStatus'))
});

Then(/^the invoice billed date is updated/, async () => {
    await accountDetailInvoicesScenario.validateBilledDate(world.dataMap.get('InvoiceDate'));
});

Then(/^the invoice resent confirmation message is displayed/, async () => {
    await accountDetailInvoicesScenario.validateInvoiceResentMessageDisplayed();
});
