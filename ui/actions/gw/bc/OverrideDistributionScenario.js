import { NewDirectBillPayment_Ext } from './scenarioPages/NewDirectBillPayment_Ext.js';
//import { AccountGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks.js';
import { AccountGroupMenuLinks_Ext } from './scenarioPages/AccountGroupMenuLinks_Ext.js';
import { Selector } from 'testcafe';
import { t } from "testcafe";
import world from "../../../util/gw/world.js"
import { searchTableRecord, validateTableRecord } from "../../../util/gw/helper"

const newDirectBillPayment_Ext = new NewDirectBillPayment_Ext()
//const accountGroupMenuLinks = new AccountGroupMenuLinks()
const accountGroupMenuLinks_Ext = new AccountGroupMenuLinks_Ext()

export class OverrideDistributionScenario {
    async overrideDistribution(){
    await newDirectBillPayment_Ext.newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVAmount.setValue(world.dataMap.get('Amount'))
    await newDirectBillPayment_Ext.newDirectBillPaymentEditDBPaymentScreenOverrideModeButton.click()
    await newDirectBillPayment_Ext.overrideDistributionAmount.setValue(world.dataMap.get('DistributionAmount'))
    await newDirectBillPayment_Ext.newDirectBillPaymentEditDBPaymentScreenUpdate.click()
    //await t.scrollIntoView(accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailInvoices)
    await t.scrollIntoView(accountGroupMenuLinks_Ext.menuLinks_AccountDetailInvoiceStreams)
    //await t.scrollIntoView('#AccountGroup-MenuLinks-AccountGroup_AccountDetailInvoices')
    await accountGroupMenuLinks_Ext.menuLinksAccountGroup_AccountDetailInvoices.click()
}
  
async validateOverrideDistribution(){
    await t.expect (await validateTableRecord("Invoice Number",(world.dataMap.get('InvoiceNumber')),7)).eql(world.dataMap.get('Due'))
}
  }