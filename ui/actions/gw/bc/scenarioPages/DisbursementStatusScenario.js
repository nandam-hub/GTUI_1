import { t } from 'testcafe'
import { AccountGroupMenuActions } from '../../../../pages/gw/generated/billingsolutions/pages/navigation/menuActions/AccountGroupMenuActions'
import { AccountGroupMenuActions_Ext } from './AccountGroupMenuActions_Ext';
import { NewDirectBillPayment } from '../../../../pages/gw/generated/billingsolutions/pages/other/NewDirectBillPayment';
import { PoliciesTabBar } from '../../../../pages/gw/generated/billingsolutions/pages/navigation/tabBar/PoliciesTabBar';
import { PolicySummary_Ext } from './PolicySummary_Ext';
import world from "../../../../util/gw/world.js";
import { AccountGroupMenuLinks } from '../../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks.js';
import { ProducerDetailGroupMenuLinks } from '../../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/ProducerDetailGroupMenuLinks.js';
 import { navigateAndClickSubmenu } from "../../../../util/gw/helper.js";

const accountGroupMenuActions = new AccountGroupMenuActions();
const accountGroupMenuActions_Ext = new AccountGroupMenuActions_Ext();
const newDirectBillPayment = new NewDirectBillPayment();
const policiesTabBar = new PoliciesTabBar();
const policySummary_Ext = new PolicySummary_Ext();
const accountGroupMenuLinks = new AccountGroupMenuLinks();
const producerDetailGroupMenuLinks = new ProducerDetailGroupMenuLinks();

export class DisbursementStatusScenario {

    async newpaymentDetails(){
        await accountGroupMenuActions.accountGroupAccountDetailMenuActions.click();
        await navigateAndClickSubmenu(['New Payment'], 'New Direct Bill Payment');
        await newDirectBillPayment.newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVAmount.setValue(world.dataMap.get('Amount'));
        await newDirectBillPayment.newDirectBillPaymentEditDBPaymentScreenExecuteWithoutDistribution.click();
    }
    async disbursementDetails(){  
        await accountGroupMenuActions.accountGroupAccountDetailMenuActions.click();
        await navigateAndClickSubmenu(['New Transaction'], 'Disbursement');
        await accountGroupMenuActions_Ext.CreateDisbursementDetailDV_amount.setValue(world.dataMap.get('DisbursedAmount'));
        await accountGroupMenuActions_Ext.effectiveDate.setValue(world.dataMap.get('Date'));
        await accountGroupMenuActions_Ext.CreateDisbursementDetailDV_reason.selectOptionByLabel(world.dataMap.get('Reason'));
        await accountGroupMenuActions_Ext.AccountCreateDisbursementWizard_Next.click();
        await accountGroupMenuActions_Ext.Finish.click();
        await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailDisbursements.click();
    }


    async producerDetails()
    {
      await policySummary_Ext.ProducerName.click();
      await producerDetailGroupMenuLinks.menuLinksProducerDetailGroup_ProducerStatementOverview.click();

    }


        

        

    }



