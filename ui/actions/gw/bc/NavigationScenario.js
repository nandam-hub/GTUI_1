import { AccountGroupMenuLinks } from '../../../../ui/pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks'
import { SearchTabBar } from '../../../pages/gw/generated/billingsolutions/pages/navigation/tabBar/SearchTabBar';
import { SearchGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/SearchGroupMenuLinks';
import { PolicyGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/PolicyGroupMenuLinks';
import world from "../../../util/gw/world.js"
import { AccountsTabBar_Ext } from './scenarioPages/navigation/AccountsTabBar_Ext';
import { AccountGroupMenuActions } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuActions/AccountGroupMenuActions.js';
import { navigateAndClickSubmenu,dateFunction } from "../../../util/gw/helper.js";
import { PolicyDetailPayments } from '../../../pages/gw/generated/billingsolutions/pages/policyGroup/PolicyDetailPayments.js';
import { t } from 'testcafe';
import {PoliciesTabBar_Ext } from './scenarioPages/navigation/tabBar/PoliciesTabBar_Ext'
import { PolicySummary_Ext } from '../../../pages/gw/generated/billingsolutions/pages/policyGroup/policyOverview/PolicySummary.js';

const accountGroupMenuLinks = new AccountGroupMenuLinks();
const searchTabBar = new SearchTabBar()
const searchGroupMenuLinks = new SearchGroupMenuLinks()
const policyGroupMenuLinks = new PolicyGroupMenuLinks()
const accountsTabBar_Ext = new AccountsTabBar_Ext()
const accountGroupMenuActions = new AccountGroupMenuActions();
const policyDetailPayments = new PolicyDetailPayments()
const policiesTabBar_Ext = new PoliciesTabBar_Ext()

export class NavigationScenario {
  async navigateToInvoices() {
    await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailInvoices.click();
  }
  async navigateSearchPolicyScreen() {
    await searchTabBar.tabBarSearchTab.click()
    await searchGroupMenuLinks.menuLinksSearchGroup_PolicySearch.click()
    console.log('On Search Policy Screen')
  }
  async navigateToCommissionsScreen() {
    await policyGroupMenuLinks.menuLinksPolicyGroup_PolicyDetailCommissions.click()
  }
  async navigateToAccountScreen() {
    await accountsTabBar_Ext.accountsTab_ExpandButton.click()
    await accountsTabBar_Ext.accountsTab_AccountNumberSearchInput.setValue(world.dataMap.get('AccountNumber'))
    await accountsTabBar_Ext.accountSearch_Button.click()
  }
  // ToDo - needs to be reviewed later - navigateToAccountScreenDuplicate()
  async navigateToAccountScreenDuplicate(AccountNumber) {
    await accountsTabBar_Ext.accountsTab_ExpandButton.click()
    await accountsTabBar_Ext.accountsTab_AccountNumberSearchInput.setValue(AccountNumber)
    await accountsTabBar_Ext.accountSearch_Button.click()
  }

  async navigateToNewpaymet() {
    await accountGroupMenuActions.accountGroupAccountDetailMenuActions.click();
    await navigateAndClickSubmenu(['New Payment'], 'New Direct Bill Payment');
  }
  async navigateToDisbursement() {
    await accountGroupMenuActions.accountGroupAccountDetailMenuActions.click();
    await navigateAndClickSubmenu(['New Transaction'], 'Disbursement');
  }
  async navigateToChangePaymentPlan() {
    await policyGroupMenuLinks.menuLinksPolicyGroup_PolicyDetailPayments.click()
    await policyDetailPayments.policyDetailPaymentsScreenChangePaymentPlan.click()
  }
  async navigateToPaymentsScreen() {
    await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailPayments.click()
  }
  async openPolicy(policyNumber) {
    await policiesTabBar_Ext.tabBarPolicyDropDown.click()
    await policiesTabBar_Ext.tabBarpolicyNumberSearchItem.setValue(policyNumber)
    await policiesTabBar_Ext.searchButton.click()
  }
}