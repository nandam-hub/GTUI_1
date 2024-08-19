import { NewDirectBillPayment_Ext } from './scenarioPages/NewDirectBillPayment_Ext.js';
import { AccountGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks.js';
import { Selector } from 'testcafe';
import { t } from "testcafe";
import world from "../../../util/gw/world.js"
import { searchTableRecord, validateTableRecord } from "../../../util/gw/helper"

const newDirectBillPayment_Ext = new NewDirectBillPayment_Ext()
const accountGroupMenuLinks = new AccountGroupMenuLinks()

export class OverrideDistributionScenario {
    async overrideDistribution(){
    await newDirectBillPayment_Ext.newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVAmount.setValue(world.dataMap.get('Amount'))
    await newDirectBillPayment_Ext.newDirectBillPaymentEditDBPaymentScreenOverrideModeButton.click()
    await newDirectBillPayment_Ext.overrideDistributionAmount.setValue(world.dataMap.get('Distribution_Amount'))
    await newDirectBillPayment_Ext.newDirectBillPaymentEditDBPaymentScreenUpdate.click()
    await t.scrollIntoView('#AccountGroup-MenuLinks-AccountGroup_AccountDetailInvoices')
    await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailInvoices.click()
}
  
async validateOverrideDistribution(){
    await t.expect (await validateTableRecord("Invoice Number",(world.dataMap.get('Invoice_Number')),7)).eql(world.dataMap.get('Due'))
}
  }