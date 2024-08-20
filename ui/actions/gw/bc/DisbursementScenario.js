import { t } from 'testcafe'
import world from "../../../util/gw/world.js";
import { AccountGroupMenuActions_Ext } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuActions/AccountGroupMenuActions_Ext.js';
import { NewDirectBillPayment } from '../../../pages/gw/generated/billingsolutions/pages/other/NewDirectBillPayment.js';
import { AccountGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks.js';
import { ProducerDetailGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/ProducerDetailGroupMenuLinks.js';
import { returnDataFromTable,dateFunction } from "../../../../ui/util/gw/helper";
import { startsWith } from "lodash";
import { PolicySummary_Ext } from '../../../pages/gw/generated/billingsolutions/pages/policyGroup/policyOverview/PolicySummary_Ext.js';

const accountGroupMenuActions_Ext = new AccountGroupMenuActions_Ext();
const newDirectBillPayment = new NewDirectBillPayment();
const policySummary_Ext = new PolicySummary_Ext();
const accountGroupMenuLinks = new AccountGroupMenuLinks();
const producerDetailGroupMenuLinks = new ProducerDetailGroupMenuLinks();

export class DisbursementScenario {
    async newPaymentDetails() {
        await newDirectBillPayment.newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVAmount.setValue(world.dataMap.get('Amount'));
        await newDirectBillPayment.newDirectBillPaymentEditDBPaymentScreenExecuteWithoutDistribution.click();
    }
    async disbursementDetails() {
        await accountGroupMenuActions_Ext.createDisbursementDetailDV_amount.setValue(world.dataMap.get('DisbursedAmount'));
        await accountGroupMenuActions_Ext.createDisbursementDetailEffectiveDate.setValue(dateFunction(0));
        await accountGroupMenuActions_Ext.createDisbursementDetailReason.selectOptionByLabel(world.dataMap.get('Reason'));
        await accountGroupMenuActions_Ext.accountCreateDisbursementWizard_Next.click();
        await accountGroupMenuActions_Ext.disbursementFinish.click();
        await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailDisbursements.click();
    }
    async producerDetails() {
        await policySummary_Ext.producerName.click();
        await producerDetailGroupMenuLinks.menuLinksProducerDetailGroup_ProducerStatementOverview.click();
    }
    async displayedCommissionStatement() {
        await t.expect((await returnDataFromTable(1)).startsWith('10')).ok("text didnot start with 10")
    }
    async validateDisbursement() {
        await t.expect(world.dataMap.get('DisbursedAmount')).contains(await returnDataFromTable(7))
    }
}